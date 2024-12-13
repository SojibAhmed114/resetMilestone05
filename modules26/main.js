//event handel
//system one call function name
function makeRed(){
    document.body.style.backgroundColor = 'red';
}


// system two 
const makeBlueButton = document.getElementById('makeBlue');
makeBlueButton.onclick = makeBlue;
function makeBlue (){
    document.body.style.backgroundColor = 'blue';
}

// system three
const makePink =  document.getElementById('makePink');
makePink.addEventListener('click', makePinkButton);
function makePinkButton (){
    document.body.style.backgroundColor = 'pink';
}

// system three anther
const makeGreens = document.getElementById('makeGreen');
makeGreens.addEventListener('click', function makeGreenBtn(){
        document.body.style.backgroundColor = 'green';
    });

// final system

document.getElementById('goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});