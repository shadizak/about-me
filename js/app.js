'use strict';
var grade = 0; 

var str = window.prompt(" Enter your name ", "haneen");

var welcome = "Welcome " + str;
alert(welcome);

function firstQuestionFun(){


    
    var firstQuestion = prompt('1st of July is my birthday date?').toLowerCase();

    switch (firstQuestion.toLowerCase()) {
        case 'yes' :
            case 'y' :
            //console.log('user answer is ', firstQuestion)
            alert("that\s true !");
            grade++; // + one point
            break;
    
        case 'no':
            case 'n':
            //console.log('user answer is', firstQuestion)
            alert('That\'s false');
    }

}
firstQuestionFun();

function secondQuestionFun(){
    var secondQuestion = prompt('do you think i like cats?').toLowerCase();
    switch (secondQuestion.toLowerCase()) {
        case 'yes':
            case 'y':
            //console.log('user answer is ', secondQuestion)
            alert("that\s true !");
            grade++;
            break;
    
        case 'no':
            case 'n':
            //console.log('user answer is', secondQuestion)
            alert('That\'s false');
    }
}
secondQuestionFun();

function thirdQuestionFun(){

    var thirdQuestion = prompt('do I talk alot?').toLowerCase();
    switch (thirdQuestion.toLowerCase()) {
        case 'yes':
            case 'y':
            //console.log('user answer is ', thirdQuestion)
            alert("that\s false ");
            break;
    
        case 'no':
            case 'n':
            //console.log('user answer is', thirdQuestion)
            alert('That\'s true');
            grade++;
           
    
    }
}

thirdQuestionFun();

function fourthQuestionFun(){
    var fourthQuestion = prompt('do you think i can talk more than one language ?').toLowerCase();
    switch (fourthQuestion.toLowerCase()) {
        case 'yes':
        case 'y':
             console.log('user answer is ', fourthQuestion);
            alert("that\'s true ");
            grade++;
            break;
    
        case 'no':
        case 'n':
            //console.log('user answer is', fourthQuestion)
            alert('That\'s false');
    
    }
}

fourthQuestionFun();

function fifthQuestionFun(){
    var fifthQuestion = prompt('I have a Toyota car?').toLowerCase();
switch (fifthQuestion.toLowerCase()) {
    case 'yes':
        case 'y':
        //console.log('user answer is ', fifthQuestion)
        alert("that\s false ");
        break;

    case 'no':
        case 'n':
        //console.log('user answer is', fifthQuestion)
        alert('That\'s true'); grade++;

}
}

fifthQuestionFun();

function sixthQuestionFun(){
    var goodBye = alert("Good job " + str);

    //question 6 
    var answer = 7
    
    for (var i= 0 ; i <=3;i++) {
    
        var question6 = prompt('enter your lucky number');
        if (question6 == answer){
            alert('that is true');
            grade++;
            break;
            
        }
     if (question6 < answer){
         alert("too low");
     }
        if (question6 > answer )  {
            alert("too high")
        } else {
            alert('you didn\'nt enter a number !');
        } 
    
        }
        alert("the correct answer is " + answer);
}

sixthQuestionFun();

function seventhQuestionFun(){
    var answers = new Array("jordan","saudi arabia","turkey");
    for(var i = 0 ; i<=5 ; i++){
        console.log(i);
        
       
        var question7 = prompt("what places i have visited ?");
        var j = 0;
        while(j<3){
    
            if(answers[j] == question7){
                alert("that is correct")
                grade++;
                break;
            }
            else{
                j++;
            }
    
        }
        if(answers[j] == question7){
            break;
        }
          
    }
    

}

seventhQuestionFun();

alert("the correct answers are: "+ answers);
console.log(answers)

alert('you answerd ' + grade + " correctly from 7 questions");
console.log(grade);