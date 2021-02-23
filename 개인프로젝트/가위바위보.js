let 이미지좌표 = '0';
let 가위바위보 = {
    가위: '0',
    바위: '-126px',
    보: '-261px',
};
let text = document.getElementById('text');
document.querySelector('.container');
let 점수표 = {
    가위 : 1,
    바위 : 0,
    보 : -1,
}
document.querySelectorAll('.버튼').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(인터벌);
        setTimeout(function () {
            인터벌 = setInterval(function () {
                if (이미지좌표 === 가위바위보.가위) {
                    이미지좌표 = 가위바위보.바위;
                }
                else if (이미지좌표 === 가위바위보.바위) {
                    이미지좌표 = 가위바위보.보;
                }
                else if (이미지좌표 === 가위바위보.보) {
                    이미지좌표 = 가위바위보.가위;
                }
                document.querySelector('#컴퓨터').style.backgroundPosition = 이미지좌표;
                text.innerText = '';
            }, 100)
        }
            , 3000
        )
        var 나의선택 = this.textContent;
        var 나의점수 = 점수표[나의선택];
        var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)]
        if (나의점수 - 컴퓨터점수 === 0) {
            text.innerText = '비겼습니다';
        }
        else if([-1,2].includes(나의점수 - 컴퓨터점수)){
            text.innerText = '이겼습니다';
        }
        else{
            text.innerText = '졌습니다';
        }
    })
})
function 컴퓨터의선택(좌표) {
    return Object.entries(가위바위보).find(function (x) {
        return x[1] === 좌표;
    })[0];
}

let 인터벌 = setInterval(function () {
    if (이미지좌표 === 가위바위보.가위) {
        이미지좌표 = 가위바위보.바위;
    }
    else if (이미지좌표 === 가위바위보.바위) {
        이미지좌표 = 가위바위보.보;
    }
    else if (이미지좌표 === 가위바위보.보) {
        이미지좌표 = 가위바위보.가위;
    }
    document.querySelector('#컴퓨터').style.backgroundPosition = 이미지좌표;
}, 100)