let 테이블 = document.querySelector('table');
let 칸들 = [];
let 줄들 = [];
let 텍스트 = document.querySelector('p');
let 턴 = 'X';
let 기회 = 0;

for (i = 0; i < 3; i++) {
    const 줄 = document.createElement('tr');
    칸들.push([]);
    줄들.push(줄);
    테이블.appendChild(줄);
    for (j = 0; j < 3; j++) {
        const 칸 = document.createElement('td');
        칸들[i].push(칸);
        줄.appendChild(칸);
        칸.addEventListener('click', 비동기함수);
    }
}

function 비동기함수(event) {
    let 몇줄 = 줄들.indexOf(event.target.parentNode);
    let 몇칸 = 칸들[몇줄].indexOf(event.target);
    if (칸들[몇줄][몇칸].textContent === '') {
        칸들[몇줄][몇칸].textContent = 턴;
        let 결과 = false;
        기회 += 1;

        if (칸들[몇줄][0].textContent === 턴 && 칸들[몇줄][1].textContent === 턴 && 칸들[몇줄][2].textContent === 턴) {
            결과 = true;
        }
        if (칸들[0][몇칸].textContent === 턴 && 칸들[1][몇칸].textContent === 턴 && 칸들[2][몇칸].textContent === 턴) {
            결과 = true;
        }


        if (칸들[0][0].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][2].textContent === 턴) {
            결과 = true;
        }



        if (칸들[0][2].textContent === 턴 && 칸들[1][1].textContent === 턴 && 칸들[2][0].textContent === 턴) {
            결과 = true;
        }


        if (결과) {
            텍스트.innerText = 턴 + " 턴 의 승리입니다";
            기회 = 0;
            setTimeout(안돼, 2000);
            칸들.forEach(function (줄) {
                줄.forEach(function (칸) {
                    칸.innerText = '';
                })
            })
        }
        else if (기회 === 9) {
            텍스트.innerText = '무승부입니다';
            기회 = 0;
            setTimeout(안돼, 2000);
            칸들.forEach(function (줄) {
                줄.forEach(function (칸) {
                    칸.innerText = '';
                })
            })
        }
        else {

            if (턴 === 'X') {
                턴 = "O";
            }
            else {
                턴 = 'X';
            }
        }
    }
    else {
        텍스트.innerText = '그곳에는 입력할 수 없습니다.';
        setTimeout(안돼, 2000);
    }
}

function 안돼() {
    텍스트.innerText = '';
}
