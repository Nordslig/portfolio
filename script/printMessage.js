const printMessage = () =>
{
  const currentTime = new Date();

  const cTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const lS = JSON.parse(localStorage.getItem('MessageData'));

  alert(`
  Wiadomość wysłana przez użytkownika:\n${lS.name}, 
  o adresie e-mail:\n${lS.mail}.
  Treść wiadomości:\n${lS.message}.
  Wiadomość wysłano o ${cTime}`)
} 