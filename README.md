Date() project

Prior to my backcountry skiing trip to Argentina, I created a countdown project to practice using the Date() object in JavaScript. Below are the steps I took to implement the functionality of the countdown timer.

Steps for creating a countdown -

- create an array with the months of the year
- create an array with the days of the week
- select elements - calendar date, container of countdown, the individual numbers for the countdown (h4)
- store countdown end date in a variable
- year, month, date, hour, minute, seconds
- store each of those individual values into variables

- weekday returns a number, requires array to get name
- months returns a number. Use array to get the name
- store future date in milliseconds
- create a function which will calculate the the remaining time
- store current time in a variable
- store difference in a variable
- convert days, hours, minutes into milliseconds
- calculate the difference for each, store in a variable
- use Math.floor to get integers for each
- for the rest, use modulus operator then divide
- create a values array with the calculations
- create a function to format the display if the value is less than ten
- loop over the items element from the beginning and set item.innerHTML = format(values[index])
- write conditional for when countdown expires
- use clearInterval()
- replace counter with a message
- use setInterval() to make counter run smoothly by the second
- invoke function
