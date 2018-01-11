'use strict';

    
alert('Hi! You don\'t know me, but after this we will know a little about each other.  Now let the fun begin!');
var userNameInput = prompt('My name is Steve, what is your name?');
console.log('The users name is:' + userNameInput);

alert('Nice to meet you ' + userNameInput + '. Now we\'re going to play a simple yes-no question game so you can learn a fun fact about me. Please answer the following questions with yes or no only');

var poleCounter = 0;

var northPole = prompt(userNameInput + ' if I told you I have been to the top of the world, would you believe me?').toLowerCase();
if(northPole === 'yes') { 
  alert('You are correct! I went to the North Pole in 1996.');
} else if (northPole === 'no') {
  alert('Sorry, you\'re wrong.  I went to the North Pole in 1996.');
  poleCounter ++;
} else {
  alert('I thought we agreed to answer with yes or no only. I\'ll give you this one. The correct answer is yes. I went to the North Pole in 1996. Please answer the rest of the questions with ONLY yes or no');
  poleCounter ++;
}
console.log('The user knows I\'ve been to the North Pole in 1996');

var notCold = prompt('Would you believe I got all the way there without ever getting cold?').toLowerCase();
if (notCold === 'yes') {
  alert('Right, and I wasn\'t even wearing a coat!');            
} else{
  alert(userNameInput + ' I wasn\'t lying. I was never too cold, or wearing a coat!');
  poleCounter ++;
}
console.log('The user has knows I stayed warm');

var fly = prompt('If I said I flew over the Polar Ice cap to get there, would you believe that?').toLowerCase();
if (fly === 'yes') {
  alert('No I didn\'t fly! I don\'t like planes.'); 
  poleCounter ++;           
} else{
  alert('Good answer! I\'m not superman and I don\'t like planes.');
}
console.log('The user has knows I did\'t fly');

var transporter = prompt('Could I have been transported there like Spock or Captian Kirk would have?').toLowerCase();
if (transporter === 'no') {
  alert('Yes, transpoters don\'t exist. Star Trek was just a TV show.');
} else {
  alert('No, I wish we had transporter technology, but Star Trek was just a TV show');
  poleCounter ++;
}
console.log('The user understands Star Trek was just a TV show');

var submarine = prompt('Well, I didn\'t fly, and I wasn\'t magically transported. If I told you I got there by going under the ice in a submarine, would you believe that?').toLowerCase();
if (submarine === 'yes') {
  alert('Fantastic! In 1996 I traveled under the polar ice cap in the relative warmth of a nuclear submarine and surfaced at the North Pole.');
} else {
  alert('Sorry wrong answer. In 1996 I traveled under the polar ice cap in the relative warmth of a nuclear submarine and surfaced at the North Pole.');
  poleCounter ++;
}

alert('Well, ' + userNameInput + ' thanks for playing that little game.  As I said, we now know a little about each other.  I know your name, and you know I spent some time on a submarine and traveled under the ice to the North Pole in 1996.  This voyage was done as part 2 of a 6 part unclassified joint military and civilian mission known as Scicex (Science Exercise).  The mission of Scicex was to study the efects of climate change on the polar ice cap and the Artic ocean. Later I\'ll share some pictures of that trip.');

var statesLivedIn = 11;

var counter = 0;

var flag = false;

alert('As you may have guessed already I was in the Navy so have lived in many places. As a matter of fact, I also moved many times as a child as well as after I retired from the Navy.');


while (flag === false && counter < 5) {
  var statesGuess = prompt('Can you guess how many US states would you guess I\'ve lived in with 4 tries or less?');
  statesGuess = parseInt(statesGuess);
  counter ++;

  if (statesGuess === statesLivedIn) {
    alert('Yes, you are correct and you got the correct answer in only ' + counter + ' tries. I have in fact lived in 11 US states total and 3 of them on more than one occasion.');
    flag = true;
  }
  else if (statesGuess > statesLivedIn){
    alert('Your guess is too hight. Try again.');
  }
  else{
    alert('Your guess is too low. Try again.');
  }
}

if (counter === 5) {
  alert('Sorry, you took too many tries.  The correct answer was 11 states.  I also lived in 3 of those states on nmore tha one occasion.');
}

alert('Let\'s keep with the places I\'ve lived theme. I\'ve lived in 3 countries besides the United States. I can tell one of these countries was in the Eastern Hemisphere, two of these countries were in the Southern Hemisphere, in two of these countries English was not the primary language, and Portugese was the primary language in one of these countries.')

var countries = ['mexico', 'brazil', 'australia'];

var countriesGuess = prompt('Can you guess one of the countries besides the United States I\'ve lived in?').toLowerCase();



