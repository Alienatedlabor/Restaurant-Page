const contact = (() => {
  const container = document.querySelector('#content');
  // heading
  const contactHeading = document.createElement('h1');
  contactHeading.textContent = 'Contact Us';
  container.append(contactHeading);
  //form semantic element
  const formDiv = document.createElement('form');
  container.append(formDiv);
  //name label
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  nameLabel.setAttribute('for', 'name');
  nameLabel.setAttribute('required');
  nameLabel.setAttribute('placeholder', 'name');
  formDiv.append(nameLabel);

  return container;
})();
export { contact };
