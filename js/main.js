// create a variable (called: todaysDate) that is a date object based on today's date
var todaysDate = new Date();


// Break down the date object into seperate elements (month and day)

// First get the month and assign it to a new variable (called: todaysMonth)
var todaysMonth = todaysDate.getMonth();

// Next get the day of the month and assign it to a new variable (called: todaysDay)
var todaysDay = todaysDate.getDate();

//create empty variables for each month to hold the strings of quotes
var janQuotes = [
"1500: The Portuguese explorer Pedro Alvares Cabral searches the coast of Brazil and claims the region for Portugal.", "1905: After a six-month siege, Russians surrender Port Arthur to the Japanese.", "1521: Martin Luther is excommunicated from the Catholic Church."], febQuotes = [], marQuotes = [], aprQuotes = [], mayQuotes = [], junQuotes = [], julQuotes = [], augQuotes = [], sepQuotes = [], octQuotes = [], novQuotes = []; decQuotes = [];


$(document).ready
