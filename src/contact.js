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
  formDiv.append(nameLabel);
  //name input
  const nameInput = document.createElement('input');
  nameInput.setAttribute('for', 'name');
  nameInput.setAttribute('placeholder', 'name');
  formDiv.append(nameInput);
  //email label
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  emailLabel.setAttribute('for', 'email');
  formDiv.append(emailLabel);
  //email input
  const emailInput = document.createElement('input');
  emailInput.setAttribute('for', 'email');
  emailInput.setAttribute('placeholder', 'email');
  emailInput.setAttribute('type', 'email');
  formDiv.append(emailInput);
  //message label
  const messageLabel = document.createElement('label');
  messageLabel.textContent = 'Message:';
  messageLabel.setAttribute('for', 'message');
  formDiv.append(messageLabel);
  //message input
  const messageInput = document.createElement('textarea');
  messageInput.setAttribute('for', 'message');
  messageInput.setAttribute('placeholder', "What's on your mind?");
  messageInput.setAttribute('type', 'text');
  messageInput.setAttribute('cols', '30');
  messageInput.setAttribute('rows', '10');
  formDiv.append(messageInput);
  //submit input
  const submitInput = document.createElement('input');
  submitInput.textContent = 'Submit';
  submitInput.classList.add('submit');
  formDiv.append(submitInput);
  // harold div
  const haroldDiv = document.createElement('div');
  haroldDiv.setAttribute('for', 'email');
  haroldDiv.classList.add('hidden-pain');
  container.append(haroldDiv);
  // harold h2
  const haroldHead = document.createElement('h2');
  haroldHead.textContent = 'Head Chef Harold';
  haroldDiv.append(haroldHead);
  //harold img
  const haroldImage = document.createElement('img');
  haroldImage.src =
    'https://as1.ftcdn.net/v2/jpg/04/26/99/96/1000_F_426999609_hCFq9M6VCpRkiRA30w2sV2KEsjLDC6kk.jpg';
  haroldImage.classList.add('pained-chef');
  haroldDiv.append(haroldImage);

  return container;
})();
export default contact;
