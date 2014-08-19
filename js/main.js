// create a variable (called: todaysDate) that is a date object based on today's date
var todaysDate = new Date();


// Break down the date object into seperate elements (month and day and year)
// Get the year and assign it to a new variable (called: todaysYear)
var todaysYear = todaysDate.getFullYear();

// Next get the day of the month and assign it to a new variable (called: todaysDay)
var todaysDay = todaysDate.getDate();

// Get the month and assign it to a new variable (called: todaysMonth)
// Get a month number from the todaysDate date object
var todaysMonth = todaysDate.getMonth();
// next create a function that takes that month number and converts it into a string with the month name

function nameMonth (monthNumber){
  switch (monthNumber) {
  case 0:
    return 'Jan';
    break;

  case 1:
    return 'Feb';
    break;

  case 2:
    return 'Mar';
    break;

  case 3:
    return 'Apr';
    break;

  case 4:
    return 'May';
    break;

  case 5:
    return 'Jun';
    break;

  case 6:
    return 'Jul';
    break;

  case 7:
    return 'Aug';
    break;

  case 8:
    return 'Sep';
    break;

  case 9:
    return 'Oct';
    break;

  case 10:
    return 'Nov';
    break;

  case 11:
    return 'Dec';
    break;

  default:
    statements_def
    break;
}

};

var thisMonthName = nameMonth(todaysMonth);

var homePageDateDisplay = thisMonthName + " " + todaysDay + ", " + todaysYear;

var todaysQuote = [];
var todaysQuoteArr = [];

// create a varibale with the date set up to display on the homepage without the hours and minute

var randomNumber = 0;
var randomGenerator = 1;
var randomQuote = [];
var newQuote = {
  1: ["1990", "Manuel Antonio Noriega", "After holing up for 10 days at the Vatican embassy in Panama City, General Manuel Noriega surrenders to U.S. troops to face charges of drug trafficking."],
  2: ["1990", "Manuel Antonio Noriega", "After holing up for 10 days at the Vatican embassy in Panama City, General Manuel Noriega surrenders to U.S. troops to face charges of drug trafficking."],
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};


// create a function to get the quote from the right month and date
function findQuote (month, day) {

  randomQuote = [];
  todaysQuote = quotes[month];
  todaysQuoteObj = todaysQuote[day];
  randomGenerator = Object.keys(todaysQuoteObj).length;
  randomNumber = getRandomInt(0, randomGenerator);
  randomQuote = todaysQuoteObj[randomNumber];
  return randomQuote[2];
};

function findHistoricYear (month, day) {

  todaysQuote = quotes[month];
  todaysQuoteObj = todaysQuote[day];
  randomQuote = todaysQuoteObj[randomNumber];
  return randomQuote[0];

};

function findHistoricPerson (month, day) {

  todaysQuote = quotes[month];
  todaysQuoteObj = todaysQuote[day];
  randomQuote = todaysQuoteObj[randomNumber];
  return randomQuote[1];

};

function previousDay (){

    todaysDate.setDate(todaysDate.getDate() - 1);
    todaysDay = todaysDate.getDate();
    todaysMonth = todaysDate.getMonth();

};

function nextDay (){
     todaysDate.setDate(todaysDate.getDate() + 1);
    todaysDay = todaysDate.getDate();
    todaysMonth = todaysDate.getMonth();

};

function monthNameDisplay () {
  return nameMonth(todaysMonth) + " " + todaysDay;
};

var newQuote = [];
var quotePerson;
var quoteDay;
var quoteMonth;
var quoteYear;
var quoteQuote;

var newUserArr = [];
var emailvar;
var namevar;
var passwordvar;
var userBirthMonth;
var userBirthDay;

$(document).ready(function(){

  // $('.textBox').on('touchmove', function(event){
  //   event.preventDefault();
  // });

  $('.dateLine').html(homePageDateDisplay);


// Created a function to toggle the class replace on and off of the textBox


$(".homeButton").on("click", function(event){

  todaysDay = todaysDate.getDate();
  todaysMonth = todaysDate.getMonth();
  event.preventDefault();
  $('.mainPage').addClass('zoomOut');
  $(".textBox").toggleClass('replace');
  $("html, body").animate({ scrollTop: 0 }, "slow");
  $('.date').text(monthNameDisplay());
  $('.quote').text(findQuote (todaysMonth, todaysDay));
  $('.historicalYear').text(findHistoricYear (todaysMonth, todaysDay));
  $('.historicalPerson').text(findHistoricPerson (todaysMonth, todaysDay));
  if (userBirthMonth == todaysMonth && userBirthDay == todaysDay){
    $('.quote').append('<p>Happy Birthday ' + namevar + '!  Another great thing (besides your birthday of course) that happened on this day is....</p>')
  };

});

$('.bl-icon-close').on('click', function(event){
  event.preventDefault();
  $('.textBox').removeClass('replace').css("transition", "all 2s ease");
  $('.mainPage').removeClass('zoomOut').css("transition", "all 2s ease");
});

$('.icon-left').on('click', function(event){
  event.preventDefault();
  previousDay();
  $('.quote').text(findQuote (todaysMonth, todaysDay));
  $('.historicalYear').text(findHistoricYear (todaysMonth, todaysDay));
  $('.historicalPerson').text(findHistoricPerson (todaysMonth, todaysDay));
  $('.date').text(monthNameDisplay());
  if (userBirthMonth == todaysMonth && userBirthDay == todaysDay){
    $('.quote').append('<p>Happy Birthday ' + namevar + '!  Another great thing (besides your birthday of course) that happened on this day is....</p>')
  };

});

$('.icon-right').on('click', function(event){
  event.preventDefault();
  nextDay();
  $('.quote').text(findQuote (todaysMonth, todaysDay));
  $('.historicalYear').text(findHistoricYear (todaysMonth, todaysDay));
  $('.historicalPerson').text(findHistoricPerson (todaysMonth, todaysDay));
  $('.date').text(monthNameDisplay());
  if (userBirthMonth == todaysMonth && userBirthDay == todaysDay){
    $('.quote').append('<p>Happy Birthday ' + namevar + '!  Another great thing (besides your birthday of course) that happened on this day is....</p>')
  };

});


$('.homeButton').on('mouseover', function(event){
  $(this).find(".bl-icon").removeClass("icon-sad").addClass("icon-happy");

}).on('mouseout', function() {
  $(this).find(".bl-icon").removeClass("icon-happy").addClass("icon-sad");

});

$(".newuser").on("click", function (event) {

  event.preventDefault();
        $('.popupRegistration').toggleClass('showForm');
});

$(".register").on("click", function(event){
  event.preventDefault();
  namevar = $(".name").val();
  emailvar = $(".email").val();
  passwordvar = $(".password").val();
  userBirthMonth = $(".month").val();
  userBirthDay = $(".day").val();
  newUserArr = [namevar, emailvar, passwordvar, userBirthMonth, userBirthDay];
  $('.popupRegistration').removeClass('showForm');
});

$('.showQuoteForm').on("click", function(event) {

event.preventDefault();  $('.submitQuoteForm').toggleClass('showForm');

});


// Captures the data to add to the data file
$('.submitButton').on('click', function(event) {

  event.preventDefault();
  quotePerson = $(".submitPerson").val();
  quoteDay = $(".submitDay").val();
  quoteMonth = $(".submitMonth").val();
  quoteYear = $(".submitYear").val();
  quoteQuote = $(".submitQuote").val();
  newQuote = [quoteYear, quotePerson, quoteQuote];
  quotes[quoteMonth][quoteDay][Object.keys(todaysQuoteObj).length] = newQuote;
  $('.submitQuoteForm').removeClass('showForm');
});


// Gets the submit form to close
$('.bl-icon-close-form').on('click', function(event){

  event.preventDefault();
  $('.submitQuoteForm').removeClass('showForm');

});




});
