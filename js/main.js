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
function findQuote (month, day) {

  switch (month) {
  // January
  case 0:
    var infoArray = (janQuotes[day -1]);
    return infoArray[2];
    break;

  // February
  case 1:
    var infoArray = (febQuotes[day -1]);
    return infoArray[2];
    break;

  // March
  case 2:
    var infoArray = (marQuotes[day -1]);
    return infoArray[2];
    break;

  //April
  case 3:
    var infoArray = (aprQuotes[day -1]);
    return infoArray[2];
    break;

  //May
  case 4:
    var infoArray = (mayQuotes[day -1]);
    return infoArray[2];
    break;

  //June
  case 5:
    var infoArray = (junQuotes[day -1]);
    return infoArray[2];
    break;

  //July
  case 6:
    var infoArray = (julQuotes[day -1]);
    return infoArray[2];
    break;

  //August
  case 7:
    var infoArray = (augQuotes[day -1]);
    return infoArray[2];
    break;

  //September
  case 8:
    var infoArray = (sepQuotes[day -1]);
    return infoArray[2];
    break;

  //October
  case 9:
    var infoArray = (octQuotes[day -1]);
    return infoArray[2];
    break;

  //November
  case 10:
    var infoArray = (novQuotes[day -1]);
    return infoArray[2];
    break;

  //December
  case 11:
    var infoArray = (decQuotes[day -1]);
    return infoArray[2];
    break;

  default:
    statements_def
    break;
}

};


function findHistoricYear (month, day) {

  switch (month) {
  case 0:
    var infoArray = (janQuotes[day -1]);
    return infoArray[0];
    break;

  case 1:
    var infoArray = (febQuotes[day -1]);
    return infoArray[0];
    break;

  case 2:
    var infoArray = (marQuotes[day -1]);
    return infoArray[0];
    break;

  case 3:
    var infoArray = (aprQuotes[day -1]);
    return infoArray[0];
    break;

  case 4:
    var infoArray = (mayQuotes[day -1]);
    return infoArray[0];
    break;

  case 5:
    var infoArray = (junQuotes[day -1]);
    return infoArray[0];
    break;

  case 6:
    var infoArray = (julQuotes[day -1]);
    return infoArray[0];
    break;

  case 7:
    var infoArray = (augQuotes[day -1]);
    return infoArray[0];
    break;

  case 8:
    var infoArray = (sepQuotes[day -1]);
    return infoArray[0];
    break;

  case 9:
    var infoArray = (octQuotes[day -1]);
    return infoArray[0];
    break;

  case 10:
    var infoArray = (novQuotes[day -1]);
    return infoArray[0];
    break;

  case 11:
    var infoArray = (decQuotes[day -1]);
    return infoArray[0];
    break;

  default:
    statements_def
    break;
}

};

function findHistoricPerson (month, day) {

  switch (month) {
  case 0:
    var infoArray = (janQuotes[day -1]);
    return infoArray[1];
    break;

  case 1:
    var infoArray = (febQuotes[day -1]);
    return infoArray[1];
    break;

  case 2:
    var infoArray = (marQuotes[day -1]);
    return infoArray[1];
    break;

  case 3:
    var infoArray = (aprQuotes[day -1]);
    return infoArray[1];
    break;

  case 4:
    var infoArray = (mayQuotes[day -1]);
    return infoArray[1];
    break;

  case 5:
    var infoArray = (junQuotes[day -1]);
    return infoArray[1];
    break;

  case 6:
    var infoArray = (julQuotes[day -1]);
    return infoArray[1];
    break;

  case 7:
    var infoArray = (augQuotes[day -1]);
    return infoArray[1];
    break;

  case 8:
    var infoArray = (sepQuotes[day -1]);
    return infoArray[1];
    break;

  case 9:
    var infoArray = (octQuotes[day -1]);
    return infoArray[1];
    break;

  case 10:
    var infoArray = (novQuotes[day -1]);
    return infoArray[1];
    break;

  case 11:
    var infoArray = (decQuotes[day -1]);
    return infoArray[1];
    break;

  default:
    statements_def
    break;
}

};

function previousDay (){
  switch (todaysMonth) {
  // January
  case 0:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = 11;
      todaysDay = 31;
    }
    break;

  // February
  case 1:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth -1;
      todaysDay = 31;
    }
    break;

  // March
  case 2:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 28;
    }
    break;

  //April
  case 3:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 31;
    }
    break;

  //May
  case 4:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 30;
    }
    break;

  //June
  case 5:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 31;
    }
    break;

  //July
  case 6:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 30;
    }
    break;

  //August
  case 7:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 31;
    }
    break;

  //September
  case 8:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 31;
    }
    break;

  //October
  case 9:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 30;
    }
    break;

  //November
  case 10:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 31;
    }
    break;

  //December
  case 11:
    if (todaysDay > 1){
      todaysDay = todaysDay - 1;
    } else {
      todaysMonth = todaysMonth - 1;
      todaysDay = 30;
    }
    break;

  default:
    statements_def
    break;
}
};

function nextDay (){
  switch (todaysMonth) {
  // January
  case 0:
    if (todaysDay < 31){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = 1;
      todaysDay = 1;
    }
    break;

  // February
  case 1:
    if (todaysDay < 28){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = 2;
      todaysDay = 1;
    }
    break;

  // March
  case 2:
    if (todaysDay < 31){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = 3;
      todaysDay = 1;
    }
    break;

  //April
  case 3:
    if (todaysDay < 30){
      todaysDay = 4;
    } else {
      todaysMonth = todaysMonth + 1;
      todaysDay = 1;
    }
    break;

  //May
  case 4:
    if (todaysDay < 31){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = 5;
      todaysDay = 1;
    }
    break;

  //June
  case 5:
    if (todaysDay < 30){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = todaysMonth + 1;
      todaysDay = 1;
    }
    break;

  //July
  case 6:
    if (todaysDay < 31){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = todaysMonth + 1;
      todaysDay = 1;
    }
    break;

  //August
  case 7:
    if (todaysDay < 31){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = todaysMonth + 1;
      todaysDay = 1;
    }
    break;

  //September
  case 8:
    if (todaysDay < 30){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = todaysMonth + 1;
      todaysDay = 1;
    }
    break;

  //October
  case 9:
    if (todaysDay < 31){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = todaysMonth + 1;
      todaysDay = 1;
    }
    break;

  //November
  case 10:
    if (todaysDay < 30){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = todaysMonth + 1;
      todaysDay = 1;
    }
    break;

  //December
  case 11:
    if (todaysDay < 31){
      todaysDay = todaysDay + 1;
    } else {
      todaysMonth = 0;
      todaysDay = 1;
    }
    break;

  default:
    statements_def
    break;
}


};

function monthNameDisplay () {
  return nameMonth(todaysMonth) + " " + todaysDay;
};

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

});

$('.icon-right').on('click', function(event){
  event.preventDefault();
  nextDay();
  $('.quote').text(findQuote (todaysMonth, todaysDay));
  $('.historicalYear').text(findHistoricYear (todaysMonth, todaysDay));
  $('.historicalPerson').text(findHistoricPerson (todaysMonth, todaysDay));
  $('.date').text(monthNameDisplay());

});


$('.homeButton').on('mouseover', function(event){
  $(this).find(".bl-icon").removeClass("icon-sad").addClass("icon-happy");

}).on('mouseout', function() {
  $(this).find(".bl-icon").removeClass("icon-happy").addClass("icon-sad");

});

});
