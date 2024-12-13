const someLi = document.querySelectorAll('.liContainer li');
for (const li of someLi){
    console.log(li.innerText);
} 

//styles
document.getElementById('head').style.backgroundColor = 'red';
document.getElementById('head').style.color = 'white';
document.getElementById('head').style.padding = '10px'

const title = document.getElementById('head');
title.setAttribute('title','tool added by javascript');

//-------------
// const sets = document.getElementsByClassName('sectionContainer')[0].innerHTML = <h2> poki </h2>;
const sets = document.getElementsByClassName('sectionContainer')[0].innerText;
console.log(sets);