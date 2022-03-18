document.querySelectorAll('.bar').forEach(ele => {
    if(ele.classList.contains('nov')) ele.classList.add(`animationFillNov`)
    else if(ele.classList.contains('beg')) ele.classList.add(`animationFillBeg`)
    else if(ele.classList.contains('int')) ele.classList.add(`animationFillInt`)
    else if(ele.classList.contains('adv')) ele.classList.add(`animationFillAdv`)
    else ele.classList.add(`animationFillElite`)
  })