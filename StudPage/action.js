
var num = parseInt(window.localStorage.getItem('num'));
var time = window.localStorage.getItem('time');
var ques = 1;
var score = 0;
examJSON = JSON.parse(window.localStorage.getItem('exam'));

var Ques = document.getElementById('ques');
var Op1 = document.getElementById('op1t');
var Op2 = document.getElementById('op2t');
var Op3 = document.getElementById('op3t');
var Op4 = document.getElementById('op4t');
var Op1chk = document.getElementById('op1');
var Op2chk = document.getElementById('op2');
var Op3chk = document.getElementById('op3');
var Op4chk = document.getElementById('op4');
var timeEle = document.getElementById('time');

function startTimer(duration, display){
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function initTimer() {
    var duration = 60 * parseInt(time);
    startTimer(duration, timeEle);
}

function startExam(){
    document.getElementById('first').hidden = true;
    document.getElementById('mcq').hidden = false;
    timeEle.textContent="0"+time.toString()+":"+"00";
    initTimer();
    Ques.textContent = examJSON[ques.toString()]["ques"];
    Op1.textContent = examJSON[ques.toString()]["op1"];
    Op2.textContent = examJSON[ques.toString()]["op2"];
    Op3.textContent = examJSON[ques.toString()]["op3"];
    Op4.textContent = examJSON[ques.toString()]["op4"];
}

function submitQues(){
    var yes = 0;
    if(Op1.checked == true && examJSON[ques.toString()]["ans"]=="1"){
        yes = 1;
    }
    if(Op2.checked == true && examJSON[ques.toString()]["ans"]=="2"){
        yes=1;
    }
    if(Op3.checked == true && examJSON[ques.toString()]["ans"]=="3"){
        yes = 1;
    }
    if(Op4.checked == true && examJSON[ques.toString()]["ans"]=="4"){
        yes =1 ;
    }
    score+=yes;
    ++ques;
    if(ques>num){
        document.getElementById('mcq').hidden = true;
        document.getElementById('scr').textContent = "Score : "+ score.toString();
        document.getElementById('scoreboard').hidden = false;
    }
    else{
        Ques.textContent = examJSON[ques.toString()]["ques"];
        Op1.textContent = examJSON[ques.toString()]["op1"];
        Op1chk.checked = false;
        Op2.textContent = examJSON[ques.toString()]["op2"];
        Op2chk.checked = false;
        Op3.textContent = examJSON[ques.toString()]["op3"];
        Op3chk.checked = false;
        Op4.textContent = examJSON[ques.toString()]["op4"];
        Op4chk.checked = false;
    }
    
}