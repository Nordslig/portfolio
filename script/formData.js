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

  if (noEmptyInput(formData)) null
  else {
    alert(`Uzupełnij wszystkie pola!`)
    return
  }

  localStorage.setItem('MessageData', JSON.stringify(formData));

  document.querySelector('form').reset();

  printMessage();  

});

const noEmptyInput = (formData) =>
{
  if (!formData.name || !formData.mail || !formData.message) {
    return false;
  }else{
    return true;
  }
}