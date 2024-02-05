//determineOvertimePay
// accepts two arguments - hours worked and the hourly rate
// if 40 hours or less were worked, return the hourly rate multiplied by the number of hours worked
// if more than 40 hours were worked, return the hourly rate times forty hours,
// plus the remaining hours at the given rate, multiplied by 1.5

function determineOvertimePay(hours, rate) {
    if(hours> 40){
        return (rate*40)+((hours-40)*(rate*1.5));
    }
    

}

console.log(determineOvertimePay(10, 10) == 100); // should print "true"
console.log(determineOvertimePay(40, 5) == 200); // should print "true"
console.log(determineOvertimePay(40, 10) == 400); // should print "true"
console.log(determineOvertimePay(50, 10) == 550); // should print "true"
console.log(determineOvertimePay(64, 8) == 608); // should print "true"

