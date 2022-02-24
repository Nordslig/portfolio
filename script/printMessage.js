const printMessage = () =>
{
  const currentTime = new Date();

  const cTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

<<<<<<< HEAD
  const lS = JSON.parse(localStorage.getItem('MessageData'));

  alert(`
  Wiadomość wysłana przez użytkownika:\n${lS.name}, 
  o adresie e-mail:\n${lS.mail}.
  Treść wiadomości:\n${lS.message}.
  Wiadomość wysłano o ${cTime}`)
=======



  const lS = JSON.parse(localStorage.getItem('MessageData'));


  alert(`Wiadomość wysłana przez użytkownika\n${lS.name}, przez adres e-mail\n${lS.mail}. Treść wiadomości:\n${lS.message}.\nWiadomość wysłano o ${cTime}`)
>>>>>>> 5b7ec5b0da784800e94e67cf9834a1769044ad43
} 