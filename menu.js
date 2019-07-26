const menuDiv = () => {
	let menuBackground = document.createElement('div');
	menuBackground.id = 'menu-background';

	let menu = document.createElement('div');
	menu.id = 'menu';

	let span1a = document.createElement('span');
	span1a.classList.add('menu-item');
	span1a.textContent = 'Rakia';
	menu.appendChild(span1a);
	let span1b = document.createElement('span');
	span1b.classList.add('menu-price');
	span1b.textContent = '1.80 lv';
	menu.appendChild(span1b);

	let span2a = document.createElement('span');
	span2a.classList.add('menu-item');
	span2a.textContent = 'Vodka';
	menu.appendChild(span2a);
	let span2b = document.createElement('span');
	span2b.classList.add('menu-price');
	span2b.textContent = '1.80 lv';
	menu.appendChild(span2b);

	let span3a = document.createElement('span');
	span3a.classList.add('menu-item');
	span3a.textContent = 'Whisky';
	menu.appendChild(span3a);
	let span3b = document.createElement('span');
	span3b.classList.add('menu-price');
	span3b.textContent = '2.00 lv';
	menu.appendChild(span3b);

	let span4a = document.createElement('span');
	span4a.classList.add('menu-item');
	span4a.textContent = 'Chips';
	menu.appendChild(span4a);
	let span4b = document.createElement('span');
	span4b.classList.add('menu-price');
	span4b.textContent = '1.20 lv';
	menu.appendChild(span4b);

	let span5a = document.createElement('span');
	span5a.classList.add('menu-item');
	span5a.textContent = 'Meatball';
	menu.appendChild(span5a);
	let span5b = document.createElement('span');
	span5b.classList.add('menu-price');
	span5b.textContent = '0.80 lv';
	menu.appendChild(span5b);

	let span6a = document.createElement('span');
	span6a.classList.add('menu-item');
	span6a.textContent = 'Sprat';
	menu.appendChild(span6a);
	let span6b = document.createElement('span');
	span6b.classList.add('menu-price');
	span6b.textContent = '1.60 lv';
	menu.appendChild(span6b);

	let span7a = document.createElement('span');
	span7a.classList.add('menu-item');
	span7a.textContent = 'Carp';
	menu.appendChild(span7a);
	let span7b = document.createElement('span');
	span7b.classList.add('menu-price');
	span7b.textContent = '3.00 lv';
	menu.appendChild(span7b);

	menuBackground.appendChild(menu);

	return menuBackground;
};

/*
//put all that in the index.js
const iconsDiv = () => {
	let icons = document.createElement('div');
	icons.id = 'icons';

	let menu = document.createElement('a');
	menu.id = 'icon-left';
	menu.textContent = 'Home';
	let location = document.createElement('a');
	location.id = 'icon-right';
	location.textContent = 'Find us';

	icons.appendChild(menu);
	icons.appendChild(location);

	return icons;
};
*/

//get all in one function
//change the class of the home and the one in css to class instead of id
const bigContainerMenu = () => {
	let big = document.createElement('div');
	big.classList.add('big-container');
	big.appendChild(menuDiv());
	//big.appendChild(iconsDiv());

	return big;
};

export {
	bigContainerMenu
};
