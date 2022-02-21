const currentTime = new Date();

const messageSendTime = currentTime.getHours() + ':' + currentTime.getMinutes();

document.querySelector('.submit').addEventListener('click', (e) =>{
  e.preventDefault();
  
  const senderName = document.querySelector('.sender').value;
  const senderMail = document.querySelector('.mail').value;
  // const senderName = document.querySelector('.sender').value;
  
  if(!senderName && !senderMail){
    alert(`Uzupełnij wszystkie pola`)
  } else if(!senderMail){
    alert(`Uzupełnij email`)
  }else if (!senderName){
    alert(`Uzupełnij imię`)
  }
  else{
    console.log(`Wiadomość wysłana o godzinie ${messageSendTime}, przez użytkownika ${senderName}`)
  }

  // alert(`Wiadomość wysłana o godzinie ${messageSendTime}, przez użytkownika ${senderName}`)

})

document.querySelector('.fas').addEventListener('click', () => console.log(`Działa`))