'use strict';


var str = window.prompt(" Enter your name ", "haneen");

var welcome = "Welcome " + str;
alert(welcome);



var questionOne = prompt('was I born in the 1st of July ?', "yes");
while (questionOne == 'yes' || 'no') {
   if (questionOne == 'yes') {
       alert("thats true");
    break;}
    if (questionOne == 'no')  {
        alert("thats false");
    break;} else{
        
    }

       
   }
   //console.log('user answer is ' + questionOne)
   //the answer is yes

   var questionTwo = prompt('do you think i like cats?', "yes");
   while (questionTwo == 'yes' || 'no') {
      if (questionTwo == 'yes') {
          alert("thats true, I love cats!");
       break;}
       if (questionTwo == 'no')  {
           alert("thats false, I love cats! ");
       break;}
          
      }
      //console.log('user answer is ' + questionTwo)
      //the answer is yes
      var questionThree = prompt('do I talk alot?', "no");
      while (questionThree == 'yes' || 'no') {
         if (questionThree == 'yes') {
             alert("thats false");
          break;}
          if (questionThree == 'no')  {
              alert("thats true");
          break;}
             
         }
         //console.log('user answer is ' + questionThree)
         //the answer is no
         
         var questionFour = prompt('do you think i can talk more than one language ?', "yes");
         while (questionFour == 'yes' || 'no') {
            if (questionFour == 'yes') {
                alert("thats true, I can talk Arabic, English & Turkish");
             break;}
             if (questionFour == 'no')  {
                 alert("thats false");
             break;}
                
            }
            //console.log('user answer is ' + questionFour)
            //the answer is yes
            
            var questionFive = prompt('I have a Toyota car ?', "no");
            while (questionFive == 'yes' || 'no') {
               if (questionFive == 'yes') {
                   alert("thats false");
                break;}
               if (questionFive == 'no') {
                    alert("thats true");
                break;}
                   
               }
               //console.log('user answer is ' + questionFive)
               //the answer is no

               var goodBye = prompt("Good Bye " + str);
