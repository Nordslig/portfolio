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
<<<<<<< HEAD

  if (noEmptyInput(formData)) null
  else {
    alert(`Uzupełnij wszystkie pola!`)
    return
  }
=======
  
  console.warn('Message sent!');
>>>>>>> 5b7ec5b0da784800e94e67cf9834a1769044ad43

  localStorage.setItem('MessageData', JSON.stringify(formData));

  document.querySelector('form').reset();

  printMessage();  

<<<<<<< HEAD
});

const noEmptyInput = (formData) =>
{
  if (!formData.name || !formData.mail || !formData.message) {
    return false;
  }else{
    return true;
  }
}
=======
});
>>>>>>> 5b7ec5b0da784800e94e67cf9834a1769044ad43
