const btnNM = document.querySelector('.btn');
const arrChangeNgMode = [];

let ngModeOn = false;

// btnNM.addEventListener('click', () => {



  
//   // document.querySelectorAll('header, header h1, header h2, .skills h2, .skills h3, .skills ')



  
//   if(!ngModeOn){
//     document.querySelectorAll('*:not(.scrollToContact, a, body)').forEach(ele => {
//     if(window.getComputedStyle(ele).backgroundColor === 'rgb(26, 35, 44)') {
//     arrChangeNgMode.unshift(ele);
//     ele.classList.toggle('ngMode');
//     }
//   })
//   ngModeOn = true;
//   }else{
//   arrChangeNgMode.forEach(ele => {
//     ele.classList.toggle('ngMode');
//   })
//   ngModeOn = false; 
//   while(arrChangeNgMode.length){ 
//     arrChangeNgMode.pop();
//   }
//   }
// })

btnNM.addEventListener('click', () => {

document.querySelector('body').style.backgroundColor = 'rgb()'
// document.querySelector('.btn').classList.toggle('ngMode');

  document.querySelectorAll('.ngMode').forEach(ele => {
    ele.style.backgroundColor = 'rgb(255, 205, 149)';
    if(ele.tagName === 'H2'){
      ele.style.color = 'rgb(27, 49, 71)';
    }
    else{
      ele.style.color = 'rgb(26, 35, 44)';
    }
})
})