const sections  = document.querySelectorAll('section');
for (const section of sections){
    section.style.border = '2px solid red';
    section.style.marginBottom = '5px';
    section.style.padding = '10px';
    section.style.borderRadius = '10px'
    section.style.backgroundColor = '#a2f1f9'
}

const addClass = document.getElementById('checks');
addClass.classList.add('yellow-bg');
addClass.classList.remove('largeText');


// appendChild
const getUlList =  document.querySelector('#listOne ul');

const addLi = document.createElement('li');
addLi.innerText = 'added some text by js';
getUlList.appendChild(addLi);

//-------
const getSection = document.querySelector('.lastItem');
const addHead = document.createElement('h2');
addHead.innerText = 'added header two number tag using js';
getSection.appendChild(addHead);

//----
const mainContainer = document.getElementById('mainContent');
const section = document.createElement('section');
const addH1 = document.createElement('h1');
addH1.innerText = 'baler Heading';

section.appendChild(addH1);

mainContainer.appendChild(section);