var form = document.querySelector('.form');
var input = document.querySelector('.input');
var btn = document.querySelector('.btn');
var tx3 = document.querySelector('.tx3');


let js = parseInt(Math.random() * 100 + 1);
console.log(js);


form.addEventListener('submit', function(evt){
    evt.preventDefault();

    var inputValue = Number(input.value);
    input.value = "";


    if (js === inputValue) {
        tx3.textContent = "Correct Answer wow ! "
    } else if (inputValue > js) {
        tx3.classList.toggle('div2');
        tx3.textContent = "Choose Smaller !";
    } else {
        tx3.classList.toggle('div1');
        tx3.textContent = "Choose Bigger !";
    }
})