'use strict';


var str = window.prompt(" Enter your name ", "haneen");

var welcome = "Welcome " + str;
alert(welcome);

var firstQuestion = prompt('1st of July is my birthday date?').toLowerCase();
switch (firstQuestion.toLowerCase()) {
    case 'yes':
        //console.log('user answer is ', firstQuestion)
        alert("that\s true !");
        break;

    case 'no':
        //console.log('user answer is', firstQuestion)
        alert('That\'s false');
}

var secondQuestion = prompt('do you think i like cats?').toLowerCase();
switch (secondQuestion.toLowerCase()) {
    case 'yes':
        //console.log('user answer is ', secondQuestion)
        alert("that\s true !");
        break;

    case 'no':
        //console.log('user answer is', secondQuestion)
        alert('That\'s false');
}

var thirdQuestion = prompt('do I talk alot?').toLowerCase();
switch (thirdQuestion.toLowerCase()) {
    case 'yes':
        //console.log('user answer is ', thirdQuestion)
        alert("that\s false ");
        break;

    case 'no':
        //console.log('user answer is', thirdQuestion)
        alert('That\'s true');

}
var fourthQuestion = prompt('do you think i can talk more than one language ?').toLowerCase();
switch (fourthQuestion.toLowerCase()) {
    case 'yes':
        //console.log('user answer is ', fourthQuestion)
        alert("that\s true ");
        break;

    case 'no':
        //console.log('user answer is', fourthQuestion)
        alert('That\'s false');

}

var fifthQuestion = prompt('I have a Toyota car?').toLowerCase();
switch (fifthQuestion.toLowerCase()) {
    case 'yes':
        //console.log('user answer is ', fifthQuestion)
        alert("that\s false ");
        break;

    case 'no':
        //console.log('user answer is', fifthQuestion)
        alert('That\'s true');

}
var goodBye = alert("Good job " + str);


