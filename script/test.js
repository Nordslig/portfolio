const currentTime = new Date();

const messageSendTime = currentTime.getHours() + ':' + currentTime.getMinutes();

document.querySelector('.submit').addEventListener('click', (e) =>{
  e.preventDefault();
  console.log(`Wysłano wiadomość o godzinie ${messageSendTime}`);
})