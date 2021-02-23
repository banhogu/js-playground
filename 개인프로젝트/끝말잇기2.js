var input = document.querySelector('input');
var button = document.querySelector('button');
var question = document.querySelector('.p1')
var result = document.querySelector('.p2')

button.addEventListener("click", function () {
    if(question.textContent == "제시어 입력"){
        first();
    }
    else{
    second();
    }
})
function first() {
    question.innerHTML = input.value;
    input.value = "";
    input.placeholder = question.textContent[question.textContent.length - 1] + " 로 끝나는 말은?";
    input.focus();
}
function second() {
    if (question.textContent[question.textContent.length - 1] === input.value[0]) {
        question.innerHTML = input.value;
        input.placeholder = question.textContent[question.textContent.length - 1] + " 로 끝나는 말은?";
        input.value = "";
        result.innerHTML = "정답입니다"
        input.focus();
    }
    else {
        input.value = "";
        result.innerHTML = "틀렸습니다"
        input.focus();
    }
}