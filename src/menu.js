// const menu = (() => {
//   const container = document.querySelector('#content');
//   //heading
//   const menuHeading = document.createElement('h1');
//   menuHeading.textContent = 'Menu';
//   container.append(menuHeading);
//   //menu item div
//   const menuItemDiv = document.createElement('div');
//   menuItemDiv.classList.add('menu-item');
//   container.append(menuItemDiv);
//   //menu image
//   const menuImage1 = document.createElement('img');
//   menuImage1.src =
//     'https://images.pexels.com/photos/74510/pexels-photo-74510.jpeg?cs=srgb&dl=pexels-valeria-boltneva-74510.jpg&fm=jpg';
//   menuImage1.classList.add('menu-image');
//   menuItemDiv.append(menuImage1);
//   //item name h2
//   const menuName1 = document.createElement('h2');
//   menuName1.textContent = 'Mushroom Basket';
//   menuItemDiv.append(menuName1);
//   //menu description
//   const menuDescription = document.createElement('p');
//   menuDescription.textContent =
//     'This is our most popular menu item! Limited supply- enjoy a basket with a variety of foraged mushrooms, all foraged within the last 2 to 3 days.';
//   menuDescription.classList.add('menu-description');
//   menuItemDiv.append(menuDescription);
//   //menu price
//   const price = document.createElement('p');
//   price.classList.add('price');
//   price.textContent = '$30';
//   menuItemDiv.append(price);

//   //second menu item
//   //menu item 2 div
//   const menuItemDiv2 = document.createElement('div');
//   menuItemDiv2.classList.add('menu-item');
//   container.append(menuItemDiv2);
//   //menu image 2
//   const menuImage2 = document.createElement('img');
//   menuImage2.src =
//     'https://images.pexels.com/photos/4969892/pexels-photo-4969892.jpeg';
//   menuImage2.classList.add('menu-image');
//   menuItemDiv2.append(menuImage2);
//   //item name h2 2
//   const menuName2 = document.createElement('h2');
//   menuName2.textContent = 'Advocado Toast';
//   menuItemDiv2.append(menuName2);
//   //menu description 2
//   const menuDescription2 = document.createElement('p');
//   menuDescription2.classList.add('menu-description');
//   menuDescription2.textContent =
//     "Buy this, because, face it, you weren't going to save your money anyway.";
//   menuItemDiv2.append(menuDescription2);
//   //menu price 2
//   const price2 = document.createElement('p');
//   price2.classList.add('price');
//   price2.textContent = '$100';
//   menuItemDiv2.append(price2);

//   //Menu Item 3
//   //Menu item 3 div
//   const menuItemDiv3 = document.createElement('div');
//   menuItemDiv3.classList.add('menu-item');
//   container.append(menuItemDiv3);
//   //menu image 3
//   const menuImage3 = document.createElement('img');
//   menuImage3.src =
//     'https://images.pexels.com/photos/88512/mole-nature-animals-molehills-88512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
//   menuImage3.classList.add('menu-image');
//   menuItemDiv3.append(menuImage3);
//   //item name h2 3
//   const menuName3 = document.createElement('h2');
//   menuName3.textContent = 'Dirt and whatever animals we trapped';
//   menuItemDiv3.append(menuName3);
//   //menu description 3
//   const menuDescription3 = document.createElement('p');
//   menuDescription3.classList.add('menu-description');
//   menuDescription3.textContent =
//     'Nutrient dense garden soil paired with whatever animals we hunted or trapped, usually little rodents that were trying to eat our veggies.';
//   menuItemDiv3.append(menuDescription3);
//   //menu price 3
//   const price3 = document.createElement('p');
//   price3.classList.add('price');
//   price3.textContent = '$24.20';
//   menuItemDiv3.append(price3);
//   return container;
//   //REFACTOR THIS TO USE FACTORIES/ OBJECT CONSTRUCTOR
// })();
// export { menu };
