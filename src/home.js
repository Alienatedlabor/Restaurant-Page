// const home = (() => {
//   //hero container
//   const container = document.querySelector('#content');
//   const heroContainer = document.createElement('div');
//   heroContainer.classList.add('hero-image');
//   container.appendChild(heroContainer);

//   //hero heading div
//   const heroTextDiv = document.createElement('div');
//   heroTextDiv.classList.add('text');
//   heroContainer.append(heroTextDiv);

//   //hero heading text
//   const heroH = document.createElement('h1');
//   heroH.textContent = 'Dine like a Hunter-Gatherer!';
//   heroTextDiv.append(heroH);

//   //hero button
//   const heroButton = document.createElement('button');
//   heroButton.classList.add('hero-btn');
//   heroButton.textContent = 'About Us!';
//   heroButton.setAttribute('href', '#about');
//   heroContainer.append(heroButton);

//   //about us div
//   const aboutDiv = document.createElement('div');
//   aboutDiv.classList.add('about');
//   aboutDiv.setAttribute('id', 'about');
//   container.append(aboutDiv);
//   //about us text
//   const aboutParagraph = document.createElement('p');
//   aboutParagraph.classList.add('text');
//   aboutParagraph.textContent =
//     'Here at Nomad you can enjoy the freshest, 100% foraged, locally sourced food! Everything we offer is 100% organic. We promise to connect you to that simple time, before division of labor. Before the tentacle reach of global capital. Before we even had germ theory!';
//   aboutDiv.appendChild(aboutParagraph);
//   //about image
//   const aboutImage = document.createElement('img');
//   aboutImage.src =
//     'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?cs=srgb&dl=pexels-elevate-1267320.jpg&fm=jpg';
//   aboutImage.classList.add('image');
//   container.append(aboutImage);
//   //fine print
//   const finePrint = document.createElement('p');
//   finePrint.classList.add('fine-print');
//   finePrint.textContent = 'All food is consumed at your own risk.';
//   container.append(finePrint);
//   return container;
// })();
// export { home };
