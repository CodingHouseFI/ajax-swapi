'use strict';

$(function() {
  $('button.getStuff').click(getStuff);
});

function getStuff() {

  // make HTTP request
  // http://swapi.co/api/people/1/
  $.ajax({
    url: 'http://swapi.co/api/people/1/',
    success: function(personData) {
      // successful response (status code)
      console.log('personData:', personData);

      var $person = makePersonCard(personData);
      // $person === jQuery object ready to append

      $('.people').append($person);
      // $person.appendTo($('.people'))

    },
    error: function(err) {
      console.error(err);
    }
  });
}

// function name is makePersonCard
// first argument is object with person info
// return value is jQuery object

function makePersonCard(personObj) {
  var $card = $('<div>').addClass('card');
  var $name = $('<p>').text(`Name: ${personObj.name}`);
  var $birth = $('<p>').text(`Birth: ${personObj.birth_year}`);
  var $gender = $('<p>').text(`Gender: ${personObj.gender}`);

  $card.append($name, $birth, $gender);
  return $card;
}


