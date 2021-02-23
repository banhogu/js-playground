let 당첨숫자들칸 = document.getElementById('숫자들');
let 스타일 = 'st';
let 보너스2 = document.getElementById('보너스2')
let text = document.querySelector('p');
let text2 = document.getElementById('text2')

let 후보군 = Array(45).fill().map(function (a, b) { return b + 1 });
let 셔플 = [];
while (후보군.length > 0) {
    let 랜덤수 = 후보군.splice(Math.floor(Math.random() * 후보군.length), 1)[0];
    셔플.push(랜덤수);
}


let 당첨숫자들 = 셔플.slice(0, 6);
let 보너스숫자 = 셔플[셔플.length - 1];
당첨숫자들.sort(function (a, b) { return a - b });

for (var i = 0; i < 당첨숫자들.length; i++) {
    let 공 = document.createElement('div');
    당첨숫자들칸.appendChild(공);
    공.textContent = 당첨숫자들[i];
    공.classList.add(스타일);
    if (공.textContent <= 10) {
        공.style.backgroundColor = 'red';
    }
    else if (공.textContent <= 20) {
        공.style.backgroundColor = 'blue';
    }
    else if (공.textContent <= 30) {
        공.style.backgroundColor = 'green';
    }
    else if (공.textContent <= 40) {
        공.style.backgroundColor = 'orange';
    }
    else if (공.textContent <= 50) {
        공.style.backgroundColor = 'yellow';
    }
}
보너스2.textContent = 보너스숫자;
보너스2.classList.add(스타일);

if (보너스2.textContent <= 10) {
    보너스2.style.backgroundColor = 'red';
}
else if (보너스2.textContent <= 20) {
    보너스2.style.backgroundColor = 'blue';
}
else if (보너스2.textContent <= 30) {
    보너스2.style.backgroundColor = 'green';
}
else if (보너스2.textContent <= 40) {
    보너스2.style.backgroundColor = 'orange';
}
else if (보너스2.textContent <= 50) {
    보너스2.style.backgroundColor = 'yellow';
}


let 입력받은숫자 = [];
let 카운트= 0;

for (var i = 0; i < 6; i++) {
    입력받은숫자.push(Number(prompt('숫자 6개를 입력받겠습니다. 1 ~ 45까지의 숫자를 입력해주세요')));
}
입력받은숫자.sort(function (a, b) { return a - b });
text2.innerText = '뽑은숫자는 = ' + 입력받은숫자;

for (var j = 0; j < 6; j++) {
    for(var k=0; k < 6; k++)
    if (Number(당첨숫자들[j]) === Number(입력받은숫자[k])) {
        카운트 += 1;
    }
}
if (카운트 === 6) {
    text.innerText = '1등입니다';
}
else if (카운트 === 5) {
    text.innerText = '2등입니다';
}
else if (카운트 === 4) {
    text.innerText = '3등입니다';
}
else if (카운트 === 3) {
    text.innerText = '4등입니다';
}
else if (카운트 === 2) {
    text.innerText = '5등입니다';
}
else if (카운트 === 1) {
    text.innerText = '6등입니다';
}
else{
    text.innerText = '꼴등입니다';
}
