const titleDiv = () => {
    let title = document.createElement('div');
    title.id = 'title';

    let bigTitle = document.createElement('p');
    bigTitle.id = 'big-title';
    bigTitle.textContent = 'Vodolaza';
    title.appendChild(bigTitle);

    let smallTitle = document.createElement('p');
    smallTitle.id = 'small-title';
    smallTitle.textContent = 'The best Pub & Fish Restaurant in Plovdiv';
    title.appendChild(smallTitle);

    return title
}

const middleDiv = () => {
    let middle = document.createElement('div');
    middle.id = 'middle';

    return middle
}

//put all that in the index.js
const iconsDiv = () => {
    let icons = document.createElement('div');
    icons.id = 'icons';

    let menu = document.createElement('a');
    menu.id = 'icon-left';
    menu.textContent = 'Menu';
    let location = document.createElement('a');
    location.id = 'icon-right';
    location.textContent = 'Find us';

    icons.appendChild(menu);
    icons.appendChild(location);

    return icons
}

//get all in one function
//change the class of the home and the one in css to class instead of id
const bigContainer = () => {
    let big = document.createElement('div');
    big.classList.add('big-container');
    big.appendChild(titleDiv());
    big.appendChild(middleDiv());
    big.appendChild(iconsDiv());

    return big
}

export {
    bigContainer
}
