// import './assets/hero.jpg';
// import './assets/chef.jpg';
const home = (() => {
  //hero container
  const container = document.querySelector('#content');
  heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-image');
  container.append(heroContainer);

  //hero heading div
  const heroTextDiv = heroContainer.createElement('div');
  heroTextDiv.classList.add('text');
  heroContainer.append(heroTextDiv);

  //hero heading text
  const heroH = heroContainer.createElement('h1');
  heroTextDiv.append(heroH);

  //hero button
  const heroButton = heroContainer.createElement('button');
  heroButton.classList.add('hero-btn');
  heroButton.textContent = 'About Us!';
  heroContainer.append(heroButton);
})();
export { home };
