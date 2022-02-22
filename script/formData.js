document.querySelector('.submit').addEventListener('click', (e) =>{
  e.preventDefault();
  
  const senderName = document.querySelector('.sender').value;
  const senderMail = document.querySelector('.mail').value;
  const senderMessage = document.querySelector('.messageText').value;
  
  const formData = {
    name: senderName, 
    mail: senderMail, 
    message: senderMessage,
  };
  
  console.warn('Message sent!');

  localStorage.setItem('MessageData', JSON.stringify(formData));

  document.querySelector('form').reset();

  printMessage();  

});