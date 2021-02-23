var num1, num2, num_multiple
var form = document.querySelector('form');
var input = form.querySelector('input');
var quesiton = document.querySelector('.p1');
var result = document.querySelector('.p2');

function setNumbers(){
  num1 = Math.floor(Math.random() * 9 + 1);
  num2 = Math.floor(Math.random() * 9 + 1);
  num_multiple = num1 * num2;
  quesiton.textContent = String(num1) + " 곱하기 " + String(num2) + " = ? ";
}
function success(){
input.value = "";
input.focus();
result.innerHTML="정답입니다";
}
function shit(){
input.value = "";
input.focus();
result.innerHTML="오답입니다";
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var correctAnswer = num_multiple === Number(input.value);
  if(correctAnswer){
    setNumbers();
    success();
  }
  else{
  shit();
  }
  
})

setNumbers();