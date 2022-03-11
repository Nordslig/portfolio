const projects = document.querySelectorAll('.project');
const projectsArr = [...projects];
const projectsTitlesArr = ['Weather API', 'Mini funkcja', 'Portfolio'];

const nextProjectTitle = document.querySelector('.nextProjectTitle');

nextProjectTitle.textContent = projectsTitlesArr[0];

document.querySelector('button.arrow').addEventListener('click', () => {
  projectsArr[0].classList.toggle('visible');
  const visPro = projectsArr.shift();
  projectsArr.push(visPro);
  projectsArr[0].classList.toggle('visible');
  
  const nextProName = projectsTitlesArr.shift();
  projectsTitlesArr.push(nextProName);

  nextProjectTitle.textContent = projectsTitlesArr[0];

});