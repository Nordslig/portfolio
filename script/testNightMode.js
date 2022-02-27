const btnNM = document.querySelector('.btn');

btnNM.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('ngMode');
  document.querySelectorAll('body  *').forEach( ele =>{

    if(!ele.classList.contains('ngMode') ) {
      ele.classList.toggle('ngMode');
    }else{
      ele.classList.toggle('ngMode');
    }
  });
})

