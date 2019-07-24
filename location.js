const addressDiv = () => {
	let address = document.createElement('p');
	address.id = 'address';

	return address;
};

const mapDiv = () => {
	let mapLocation = document.createElement('div');
	mapLocation.id = 'map';

	return mapLocation;
};

const hoursDiv = () => {
	let hours = document.createElement('p');
	hours.id = 'hours';

	return hours;
};

//put all that in the index.js
const iconsDiv = () => {
	let icons = document.createElement('div');
	icons.id = 'icons';

	let menu = document.createElement('a');
	menu.id = 'icon-left';
	menu.textContent = 'Menu';
	let location = document.createElement('a');
	location.id = 'icon-right';
	location.textContent = 'Home';

	icons.appendChild(menu);
	icons.appendChild(location);

	return icons;
};

//get all in one function
//change the class of the home and the one in css to class instead of id
const bigContainerLocation = () => {
	let big = document.createElement('div');
	big.classList.add('big-container');
	big.appendChild(addressDiv());
	big.appendChild(mapDiv());
	big.appendChild(hoursDiv());
	big.appendChild(iconsDiv());

	return big;
};

export { bigContainerLocation };

