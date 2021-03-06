const projects = document.querySelectorAll(".project");
const projectsArr = [...projects];
const projectsTitlesArr = ["Weather API", "Mini funkcja", "Portfolio"];

const nextProjectTitle = document.querySelector(".nextProjectTitle");

nextProjectTitle.textContent = projectsTitlesArr[0];

document.querySelector("button.arrow").addEventListener("click", () => {
  projectsArr[0].classList.toggle("visible");
  const visibleProject = projectsArr.shift();
  projectsArr.push(visibleProject);
  projectsArr[0].classList.toggle("visible");

  const nextProName = projectsTitlesArr.shift();
  projectsTitlesArr.push(nextProName);

  nextProjectTitle.textContent = projectsTitlesArr[0];
});
