function startExam(){
    document.getElementById('first').hidden = true;
    document.getElementById('mcq').hidden = false;
}

var num = parseInt(window.localStorage.getItem('num'));
var time = window.localStorage.getItem('time');
var ques = 0;
var score = 0;
examJSON = JSON.parse(window.localStorage.getItem('exam'));

function submitQues(){
    
}