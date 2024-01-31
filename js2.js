const currentTime = new Date(); // get the current time
const currentHour = currentTime.getHours(); // get the current hour (0-23)

if (currentHour >= 5 && currentHour < 13) {
  alert("Good afternoon"); // display "Good afternoon" if currentHour is between 12 and 18 (6pm)
} else {
  // do something else if currentHour is outside of the range
}
