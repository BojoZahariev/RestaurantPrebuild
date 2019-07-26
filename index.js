// import function
import {
    bigContainer
} from './home';
import {
    bigContainerMenu
} from './menu';
import {
    bigContainerLocation
} from './location';
import css from './styles/app.css';


var content = document.getElementById('content');
document.body.appendChild(content);

//try this
const iconsDiv = (page) => {

    let icons = document.createElement('div');
    icons.id = 'icons';
    if (page === 'home') {
        let menu = document.createElement('a');
        menu.id = 'icon-left';
        menu.addEventListener("click", loadMenu);
        menu.textContent = 'Menu';
        let location = document.createElement('a');
        location.id = 'icon-right';
        location.textContent = 'Find us';

        icons.appendChild(menu);
        icons.appendChild(location);
    }

    if (page === 'menu') {
        let menu = document.createElement('a');
        menu.id = 'icon-left';
        menu.addEventListener("click", loadHome);
        menu.textContent = 'Home';
        let location = document.createElement('a');
        location.id = 'icon-right';
        location.textContent = 'Find us';

        icons.appendChild(menu);
        icons.appendChild(location);
    }

    return icons
}

const loadMenu = () => {
    content.removeChild(bigContainer());
    content.appendChild(bigContainerMenu());
    bigContainerMenu.appendChild(iconsDiv('menu'));
}

const loadHome = () => {
    content.removeChild(bigContainerMenu());
    content.appendChild(bigContainer());
    bigContainerMenu.appendChild(iconsDiv('home'));
}




var content = document.getElementById('content');
document.body.appendChild(content);

//try this
bigContainer.appendChild(iconsDiv('home'));

content.appendChild(bigContainer());
