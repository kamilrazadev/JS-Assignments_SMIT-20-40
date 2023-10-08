const date = new Date();
//------------------------Q 01-------------------------
// document.write(date);
//------------------------Q 02-------------------------
// alert("Current month: " + date.getMonth());
//------------------------Q 03-------------------------
// alert("Today is: " + date.getDay());
//------------------------Q 04-------------------------
// if(date.getDay()==6 || date.getDay()==7){
//     alert("It's Fun day");
// } else {
//     alert("Not a Fun day");
// }
//------------------------Q 05-------------------------
// if(date.getDate()<16){
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }
//------------------------Q 06-------------------------
// const myDate = new Date();
// myDate.setDate(1);
// myDate.setMonth(12);
// myDate.setFullYear(1970);
// myDate.setHours(0);
// myDate.setMinutes(0);
// const diff =  date.getTime() - myDate.getTime();
// console.log(`Current Date: ${date} \nElapsed minutes since January 1, 1970: ${diff/(1000 * 60)}`)
//------------------------Q 07-------------------------
// if(date.getHours<12){
//     alert("Its AM");
// } else{
//     alert("Its PM");
// }
//------------------------Q 08-------------------------
// const LaterDate = new Date();
// LaterDate.setDate(31);
// LaterDate.setMonth(11);
// LaterDate.setFullYear(2020);
// LaterDate.setMinutes(0);
// LaterDate.setHours(0);
// console.log(`Later due: ${LaterDate}`);
//------------------------Q 09-------------------------
// const ramazanDate = new Date();
// ramazanDate.setDate(2);
// ramazanDate.setMonth(2);
// ramazanDate.setFullYear(2023);
// ramazanDate.setMinutes(0);
// ramazanDate.setHours(0);

// const noOfDays = date.getTime() - ramazanDate.getTime();
// console.log((noOfDays / (1000 * 60 * 60 * 24)).toFixed() + "Days passed since 1 Ramadan, 2023");

//------------------------Q 10-------------------------
// console.log("Current Date: " + date);
// date.setHours(date.getHours()-1);
// console.log("1 hour ago it was " + date);
//------------------------Q 11-------------------------
// console.log("Current Date: " + date);
// date.setFullYear(date.getFullYear()-100);
// console.log("100 years back, it was " + date);
//------------------------Q 12-------------------------
// var userAge = +prompt("Enter Your Age");
// console.log(`Your age is ${userAge} \nYour birth year is ${date.getFullYear()-userAge}`);
//------------------------Q 13-------------------------
// var custName = prompt("Customer Name");
// var month = date.getMonth();
// var units = +prompt("Units Consumed");
// var chargePerUnit = +prompt("Charge per unit");
// var surcharge = +prompt("Late payment surcharges");

// document.write(
//     `
//     <h1>K-Electric Bill</h1>

//     Customer Name: ${custName}<br>
//     Month: ${month}<br>
//     Number of Units: ${units}<br>
//     Charges per unit: ${chargePerUnit}<br><br>

//     Net Amount Payable (within Due Date): ${units*chargePerUnit}<br>
//     Late Payment surcharge: ${surcharge}<br>
//     Gross Amount Payable (after Due Date): ${(units*chargePerUnit)+surcharge}<br>
//     `
// );
//------------------------Q 14-------------------------
const customerName = prompt("Enter Customer Name:");
const currentMonth = prompt("Enter Current Month:");
const numberOfUnits = +prompt("Enter Number of Units:");
const chargesPerUnit = +prompt("Enter Charges per Unit:");
const dueDate = new Date(prompt("Enter Due Date (YYYY-MM-DD):"));

const currentDate = new Date();
const isLate = currentDate > dueDate;

let netAmount = numberOfUnits * chargesPerUnit;
let latePaymentSurcharge = 0;

if (isLate) {
  latePaymentSurcharge = netAmount * 0.1;
}

let grossAmount = netAmount + latePaymentSurcharge;

document.write(`
                <h2>K-Electric Bill:</h2>
                <p>Customer Name: ${customerName}</p>
                <p>Current Month: ${currentMonth}</p>
                <p>Number of Units: ${numberOfUnits.toFixed(2)}</p>
                <p>Charges per Unit: ${chargesPerUnit.toFixed(2)}</p>
                <p>Net Amount Payable (within Due Date): ${netAmount.toFixed(
                  2
                )}</p>
                <p>Late Payment Surcharge: ${latePaymentSurcharge.toFixed(
                  2
                )}</p>
                <p>Gross Amount Payable (after Due Date): ${grossAmount.toFixed(
                  2
                )}</p>
            `);
