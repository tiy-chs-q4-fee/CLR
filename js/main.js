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




// create a varibale with the date set up to display on the homepage without the hours and minute




// create a function to get the quote from the right month and date
function findQuote (todaysMonth, todaysDay) {

  switch (todaysMonth) {
  // January
  case 0:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  // February
  case 1:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  // March
  case 2:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //April
  case 3:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //May
  case 4:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //June
  case 5:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //July
  case 6:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //August
  case 7:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //September
  case 8:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //October
  case 9:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //November
  case 10:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //December
  case 11:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  default:
    statements_def
    break;
}

};


function findHistoricYear (todaysMonth, todaysDay) {

  switch (todaysMonth) {
  case 0:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 1:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 2:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 3:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 4:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 5:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 6:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 7:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 8:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 9:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 10:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 11:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  default:
    statements_def
    break;
}

};

function findHistoricPerson (todaysMonth, todaysDay) {

  switch (todaysMonth) {
  case 0:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 1:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 2:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 3:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 4:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 5:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 6:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 7:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 8:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 9:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 10:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 11:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  default:
    statements_def
    break;
}

};

function findPreviousDayQuote (month, day) {

  todaysDay = todaysDay - 1;


  switch (todaysMonth) {
  // January
  case 0:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  // February
  case 1:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  // March
  case 2:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //April
  case 3:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //May
  case 4:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //June
  case 5:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //July
  case 6:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //August
  case 7:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //September
  case 8:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //October
  case 9:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //November
  case 10:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  //December
  case 11:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[2];
    break;

  default:
    statements_def
    break;
}

};

function findPreviousDayHistoricYear (todaysMonth, todaysDay) {

  todaysDay = todaysDay - 1;

  switch (todaysMonth) {
  case 0:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 1:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 2:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 3:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 4:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 5:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 6:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 7:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 8:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 9:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 10:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  case 11:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[0];
    break;

  default:
    statements_def
    break;
}

};

function findPreviousDayHistoricPerson (month, day) {

  todaysDay = todaysDay -1;


  switch (todaysMonth) {
  case 0:
    var infoArray = (augQuotes[day -1]);
    return infoArray[1];
    break;

  case 1:
    var infoArray = (augQuotes[day -1]);
    return infoArray[1];
    break;

  case 2:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 3:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 4:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 5:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 6:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 7:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 8:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 9:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 10:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  case 11:
    var infoArray = (augQuotes[todaysDay -1]);
    return infoArray[1];
    break;

  default:
    statements_def
    break;
}

};



$(document).ready(function(){

  $('body').on('touchmove', function(event){
    event.preventDefault();
  });

  $('.dateLine').html(homePageDateDisplay);

// Created a function to toggle the class replace on and off of the textBox


$(".homeButton").on("click", function(event){

  event.preventDefault();
  $('.mainPage').addClass('zoomOut');
  $(".textBox").toggleClass('replace');
  $('.quote').text(findQuote (todaysMonth, todaysDay));
  $('.historicalYear').text(findHistoricYear (todaysMonth, todaysDay));
  $('.historicalPerson').text(findHistoricPerson (todaysMonth, todaysDay));

});

$('.bl-icon-close').on('click', function(event){
  event.preventDefault();
  $('.textBox').removeClass('replace').css("transition", "all 2s ease");
  $('.mainPage').removeClass('zoomOut').css("transition", "all 2s ease");
});


$('.homeButton').on('mouseover', function(event){
  $(this).find(".bl-icon").removeClass("icon-sad").addClass("icon-happy");

}).on('mouseout', function() {
  $(this).find(".bl-icon").removeClass("icon-happy").addClass("icon-sad");

});

});
