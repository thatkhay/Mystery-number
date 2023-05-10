let min = 1;
let max = 10;
let winingNum = 2;
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;


guessBtn.addEventListener('click', function(){
   let guess = parseInt(guessInput.value);

   if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'rgb(124, 20, 2)');
   }


   if (guess === winingNum) {
    guessInput.disabled = true;
    guessInput.style.borderColor = 'white';
    setMessage(`${winingNum} is correct, YOU WIN !`, 'rgb(253, 251, 249)');

   }else{

   }
});

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}