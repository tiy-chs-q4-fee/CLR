// create a variable (called: todaysDate) that is a date object based on today's date
var todaysDate = new Date();


// Break down the date object into seperate elements (month and day)

// First get the month and assign it to a new variable (called: todaysMonth)
var todaysMonth = todaysDate.getMonth();

// Next get the day of the month and assign it to a new variable (called: todaysDay)
var todaysDay = todaysDate.getDate();

// create a function to get the quote from the right month and date
function findQuote (todaysMonth, todaysDay) {

  switch (todaysMonth) {
  case 0:
    return (janQuotes[todaysDay -1]);
    break;

  case 1:
    return (janQuotes[todaysDay -1]);
    break;

  case 2:
    return (janQuotes[todaysDay -1]);
    break;

  case 3:
    return (janQuotes[todaysDay -1]);
    break;

  case 4:
    return (janQuotes[todaysDay -1]);
    break;

  case 5:
    return (janQuotes[todaysDay -1]);
    break;

  case 6:
    return (janQuotes[todaysDay -1]);
    break;

  case 7:
    return (augQuotes[todaysDay -1]);
    break;

  case 8:
    return (augQuotes[todaysDay -1]);
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

augQuotes = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "1521: Martin Luther is excommunicated from the Catholic Church.", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30", "Day 31" ],
sepQuotes = [],

octQuotes = [],

novQuotes = [];

decQuotes = [];


$(document).ready(function(){

  $('.dateLine').html(todaysDate);

// Created a function to toggle the class replace on and off of the textBox

$(".homeButton").on("click", function(event){

  event.preventDefault();
  $(".textBox").toggleClass('replace');

});
});
