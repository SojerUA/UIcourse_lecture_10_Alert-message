

let myName = 'Oleg';
let myAge = 31;
let myAnswer = 'Yes, i like Learning Front End.';
let question = 'My name is ' + myName + '. I am ' + myAge + ' years old.' + ' Do you like learning Front End?   ' + myAnswer;
//console.log(question)

let myMessage  = document.getElementById('message');

myMessage.onclick = function() {
    alert(question);
};
