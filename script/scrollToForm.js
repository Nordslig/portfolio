document.querySelector('.scrollToContact').addEventListener('click', () =>{
  const formHeight = document.querySelector('.contact').offsetHeight;
  console.log(formHeight);

  window.scrollTo(0, formHeight);
});