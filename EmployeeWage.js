const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;

function getWorkingHours(empCheck) {
switch (empCheck) {
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsAndWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
let empCheck = Math.floor(Math.random()*10)%3;
let empHrs = getWorkingHours(empCheck);
totalEmpHrs += empHrs;
empDailyHrsAndWageArr.push(
    {
    dayNum:totalWorkingDays,
    dailyHours:empHrs,
    dailyWage:calcDailyWage(empHrs),
    toString() {
        return '\nDay' +this.dayNum+ ' => working hours is '+this.dailyHours+' And Wage Earned = '+this.dailyWage
    },
    });
}
console.log("Showing Daily Hours Worked and Wage Earned: "+empDailyHrsAndWageArr);
empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));

let empWage = calcDailyWage(totalEmpHrs);
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("Total Employee worked days: "+totalWorkingDays+" and total worked hours: "+totalEmpHrs+" and the Wage is: "+empWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Employee wage with reduce :"+empDailyWageArr.reduce(totalWages, 0));

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr +"="+ dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily wage map: "+mapDayWithWageArr);

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Daily Wage Filtered when fulltime wage earned: "+fullDayWageArr);

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160")
}
console.log("First full time wage was earned on day: "+mapDayWithWageArr.find(findFullTimeWage));

function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160")
}
console.log("All elements having full time wage was earned : "+mapDayWithWageArr.every(isAllFullTimeWage));

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80")
}
console.log("Part time wage was earned on day: "+mapDayWithWageArr.some(isAnyPartTimeWage));

function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage>0) return numOfDays+1;
    return numOfDays;
}

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Employee Wage Map Total Hours: "+Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHoura = Array.from(empDailyHrsMap.values().reduce(findTotal, 0));
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal,0);
console.log("Employee Wage with Arrow: "+" Total Hours: "+totalHours+" Total Wages: "+totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyWageMap.forEach( (value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);