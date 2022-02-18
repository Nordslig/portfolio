const currentTime = new Date();

const messageSendTime = currentTime.getHours() + ':' + currentTime.getMinutes();

document.querySelector('.submit').addEventListener('click', (e) =>{
  e.preventDefault();
  
  const senderName = document.querySelector('.sender').value;

  console.log(`Wiadomość wysłana o godzinie ${messageSendTime}, przez użytkownika ${senderName}`)

  // alert(`Wiadomość wysłana o godzinie ${messageSendTime}, przez użytkownika ${senderName}`)

})