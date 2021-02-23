var 폼 = document.querySelector('form');
var 입력 = 폼.querySelector('input');
var 결과 = document.querySelector(".결과");
var 버튼 = document.querySelector(".버튼")
var 남은횟수창 = document.querySelector('p');
var 숫자후보;
var 숫자배열;
var showing = "show";
var button2 = "버튼2";

function 랜덤숫자뽑기() {
    숫자후보 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    숫자배열 = [];
    for (i = 0; i < 4; i++) {
        var 임의로뽑은숫자 = 숫자후보.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        숫자배열.push(임의로뽑은숫자); //숫자배열에 숫자가 배열로 들어갑니다!
    }
}
function 재시작() {
    결과.textContent = "다시 시작 이닷!";
    입력.focus();
    입력.value = '';
    남은횟수창.innerHTML = Number(10);

}

랜덤숫자뽑기();
남은횟수창.innerHTML = 10;
입력.focus();
입력.maxLength = 4;

폼.addEventListener("submit", function (e) {
    e.preventDefault();
    if (입력.value === 숫자배열.join('')) {
        결과.textContent = "홈런!!!!!!";
        입력.focus();
        입력.value = '';
        랜덤숫자뽑기()
        남은횟수창.innerHTML = Number(10);
    }
    else {
        var 답배열 = 입력.value.split('');
        console.log(답배열);
        var 스트라이크 = 0;
        var 볼 = 0;
        입력.focus();
        입력.value = '';
        남은횟수창.innerHTML -= 1;
        if (남은횟수창.innerText == '0') {
            결과.textContent = "틀렸습니다. 정답은 " + 숫자배열 + " 였습니다" + " 재시작하려면 버튼을 누르세요!";
            버튼.classList.remove(button2);
            버튼.classList.add(showing);
        }
        else {
            for (i = 0; i < 4; i++) {
                if (Number(답배열[i]) === 숫자배열[i]) {
                    스트라이크 += 1;
                }
                else if (숫자배열.indexOf(Number(답배열[i])) > -1) {
                    볼 += 1;
                }
            }
            결과.innerHTML = 스트라이크 + " 스트라이크 " + 볼 + " 볼입니다 ";
            입력.focus();
            입력.value = '';
        }
    }
})
버튼.addEventListener('click', function (ev) {
    ev.preventDefault();
    재시작()
    랜덤숫자뽑기()
})  