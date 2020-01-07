// New Date object is declared as = new Date("June 14, 2019")
// We can substarct 2 date objects and it returns in millisec

// date.getFullYear()
// date.getDays()
// are the Date class functions

function getDays(date1, date2) {
	return (Math.abs(date1 - date2))/(1000*60*60*24);
}

console.log("Days = ", getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ));
