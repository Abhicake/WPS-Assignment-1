var num = 0;
var quesCount = 0; 
var Ques = document.getElementById('ques');
var Op1 = document.getElementById('op1');
var Op2 = document.getElementById('op2');
var Op3 = document.getElementById('op3');
var Op4 = document.getElementById('op4');
var Ans = document.getElementById('ans');
examJSON = {

}

function takeQues(){
    
    questionJSON = {
        ques : Ques.value,
        op1 : Op1.value,
        op2 : Op2.value,
        op3 : Op3.value,
        op4 : Op4.value,
        ans : Ans.value,
    }

    // var quesnum = toString(quesCount + 1);
    ++quesCount;
    examJSON[quesCount] = questionJSON;

   
    if(quesCount == num){
        window.localStorage.setItem('exam', JSON.stringify(examJSON));
        document.getElementById('setQues').hidden = true;
        document.getElementById('final').hidden = false;
    }

    Ques.value = "";
    Op1.value = "";
    Op2.value = "";
    Op3.value = "";
    Op4.value = "";
    Ans.value = "";


}

function setExam(){
    window.localStorage.removeItem('exam');
    num = document.getElementById('noQues').value;
    var time = document.getElementById('time').value;
    window.localStorage.setItem('time',time);
    window.localStorage.setItem('num',num);

    if(num && time){
        console.log(num,time,'good');
        document.getElementById('noNtime').hidden = true;
        document.getElementById('setQues').hidden = false;
        num = parseInt(num);
    }
    else{
        
        document.getElementById('oops').hidden=true;
    }
    

    
}