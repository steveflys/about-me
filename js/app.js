'use strict'

    
        alert('Hi! You don\'t know me, but after this we will know a little about each other. Now the fun will begin!');
        var userNameInput = prompt('My name is Steve, what is your name?');
        console.log('The users name is:' + userNameInput);

        alert('Please answer the following questions with yes or no only');

        var northPole = prompt('OK, ' +userNameInput + ' if I told you I have been to the top of the world, would you believe me?').toLowerCase();
        if(northPole === 'yes') { 
            alert('You are correct!');
        } else if (northPole === 'no') { 
            alert('Sorry, you\'re wrong.  Been there, done that!');
        } else {
            alert('I thought we agreed to answer with yes or no only. I\'ll give you this one. I have been to the North Pole. Please answer the rest of the questions with ONLY yes or no!');
        }
        console.log('The user lives in knows I\'ve been to the North Pole');

        var notCold = prompt('Would you believe I got there without ever getting cold?').toLowerCase();
        if (notCold === 'yes') {
            alert('Right! I wasn\'t even wearing a coat.');            
        } else{
            alert('No. I wasn\'t lying, or wearing a coat!');
        }
        console.log('The user has knows I stayed warm');

        var fly = prompt('If I said I was never over the Polar Ice cap, would you believe that?');
        if (fly === 'yes') {
            alert('Right! I don\'t like planes.');            
        } else{
            alert('No. I can\'t levitate and I did\'t fly.');
        }
        console.log('The user has knows I did\'t fly');

        var transporter = prompt('Could I have been transported there like Spock or Captian Kirk would?')
        if (transporter === 'no') {
            alert('Yes! Star Trek was just a TV show.');
        } else {
            alert('Wrong! I wish we had that technology, but Star Trek was just a TV show');
        }
        console.log('The user understands Star Trek was just a TV show');

        var submarine = prompt('Well, I didn\'t fly and I wasn\'t magically transported. If I told you I got there under the ice in a submarine, would you believe that?');
        if (submarine === 'yes') {
            alert('Fantastic! I traveled under the polar ice cap in the relative warmth of a nuclear submarine and surfaced at the North Pole.');
        } else {
            alert('Sorry wrong answer. I traveled under the polar ice cap in the relative warmth of a nuclear submarine and surfaced at the North Pole.');
        }
        prompt('Thanks, ' + userNameInput +' you know I was on a submarine under the polar ice cap and I surfaced at the North Pole. I will let you in on something else, we never found any evidence of the existance of Santa Claus. Sorry if I destroyed your childhood beliefs.');
                  
