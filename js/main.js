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
  case 0:
    return (janQuotes[todaysDay -1]);
    break;

  case 1:
    return (febQuotes[todaysDay -1]);
    break;

  case 2:
    return (marQuotes[todaysDay -1]);
    break;

  case 3:
    return (aprQuotes[todaysDay -1]);
    break;

  case 4:
    return (mayQuotes[todaysDay -1]);
    break;

  case 5:
    return (junQuotes[todaysDay -1]);
    break;

  case 6:
    return (julQuotes[todaysDay -1]);
    break;

  case 7:
    return (augQuotes[todaysDay -1]);
    break;

  case 8:
    return (sepQuotes[todaysDay -1]);
    break;

  case 9:
    return (octQuotes[todaysDay -1]);
    break;

  case 10:
    return (novQuotes[todaysDay -1]);
    break;

  case 11:
    return (decQuotes[todaysDay -1]);
    break;

  default:
    statements_def
    break;
}

};


//create empty variables for each month to hold the strings of quotes
var janQuotes = [
"1500: The Portuguese explorer Pedro Alvares Cabral searches the coast of Brazil and claims the region for Portugal.", "1905: After a six-month siege, Russians surrender Port Arthur to the Japanese.", "1521: Martin Luther is excommunicated from the Catholic Church."],

febQuotes = [],

marQuotes = [],

aprQuotes = [],

mayQuotes = [],

junQuotes = [],

julQuotes = [],

augQuotes = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "On this day in 1961, Berlin was divided as East Germany sealed off the border between the city's eastern and western sectors in order to halt the flight of refugees.", "Nothing bad happened on this day, your day is actually the worst in history!", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30", "Day 31" ],
sepQuotes = [],

octQuotes = [],

novQuotes = [];

decQuotes = [];


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

});

$('.closeButton').on('click', function(event){

  event.preventDefault();
  $('.textBox').removeClass('replace').css('transition', 'all 2s ease');
  $('.mainPage').removeClass('zoomOut').css('transition', 'all 2s ease');


});

});
