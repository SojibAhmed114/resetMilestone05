const text =document.getElementById('sojib');
text.addEventListener('click', function(){
    const changeText = document.getElementById('defultText');
    changeText.innerText = 'I live in bangladesh';
});

//---------------
document.getElementById('update-Btn').addEventListener('click', function(){
    const getInput = document.querySelector('.yourInput');
    const getInputText =  getInput.value;
    
    const setText = document.getElementById('fill');
    setText.innerText = getInputText;
    getInput.value = '';
});