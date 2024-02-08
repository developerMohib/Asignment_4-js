
function calculateMoney(ticketSale ){

    if( typeof(ticketSale) !== 'number' ){
        return 'Ticket selling should be integer Number. ';
    }
    else if( ticketSale < 0 ){
        return 'Error, Ticket selling should be Positive or Zero.';
    }
    else{
        let ticketPrice = 120 ;
        let costGateKeeper = 500;
        let perStuffCost = 50;
    
        let stuffCost = 8 * perStuffCost ;
    
        let earnOfBakerBhai = ticketPrice * ticketSale;
    
        let costOfBakerBhai = costGateKeeper + stuffCost;
        
        let saveMoney = earnOfBakerBhai - costOfBakerBhai;
        return saveMoney;
    }
}

let bakerVai = calculateMoney( 555 );
document.write(bakerVai , ' <br>');



// task 2

function checkName(name){
    let myName = name;
    // number problem how to solve ???? 
    // array problem how to solve ??

    // myName = myName.trim();

    if(typeof(myName) !== 'string'){
        return 'invalid'
    }

    else if( myName.slice(-1) === 'a' || myName.slice(-1) === 'e' || myName.slice(-1) === 'i' || myName.slice(-1) === 'o' || myName.slice(-1) === 'u' || myName.slice(-1) === 'y' || myName.slice(-1) === 'w' ){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
}
let myName = checkName( ["22a"] );
document.write(myName , ' <br> ');

// Task 3


function deleteInvalids(array) {
    let newArray = [];
    if(!Array.isArray(array)){
        return 'invalid Array';
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === 'number' && !isNaN(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
let array = [NaN, 1, 12, 0, -1, undefined, 'mohibA'] ;
let callArray = deleteInvalids(array);
document.write(callArray, '<br>');
console.log(callArray);

function password(obj) {

    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
        return 'invalid';
    }

    let name = obj.name;
    let birth = obj.birthYear ;
    let site = obj.siteName;

    let siteName = site.charAt(0).toUpperCase() + site.slice(1);

    if(birth !== 'number' || birth.toString().length !== 4 ){
        return 'invalid'
    }

    let allConcat = siteName.concat('#', name, '@', birth);
    return allConcat ;


}

let kolimBhai = password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' });
console.log(kolimBhai);
document.write(kolimBhai);


/*
Function Name Must be monthlySavings()
শাহে দে র যে সকল পে মে ন্ট 3000 টাকা বা তার বে শি সে সকল পে মে ন্ট থে কে ব্যাংক Tax হি সে বে ২০% টাকা কে টে
নে য় । এখন ম োট ইনকাম থে কে Tax গুল ো বাদ দি য়ে এবং Living cost বাদ দি য়ে বাকী যে টাকা থাকে সে টা ই
হল ো শাহে দে র সে ভি ংস । অর্থাৎ ফাংশন টি শাহে দে র সে ভি ংস কে রি টার্ন করবে । যদি সে ভি ংস করার মত ো টাকা না
থাকে অর্থাৎ সে ভি ংস এর ভ্যালুযদি ০ এর চে য়ে কম হয় তাহলে ফাংশন টি রি টার্ন করবে একটি স্ট্রি ং তাহল ো “earn
more” ।
/*function signature/sample 
function password(obj) {
    //write your code here
    }
    Input :
    ফাংশন টি ইনপুট নে বে একটি Array (All payments) এবং একটি number (Living cost) ।
    Output :
    ফাংশন টি একটি number অথবা string রি টার্ন করবে ।
    ● যদি savings 0 বা তার থে কে বে শি হয় তাহলে রি টার্ন করবে number ( Total Savings )
    ● যদি savings 0 থে কে ছ োট হয় তাহলে রি টার্ন করবে String ( “earn more”)
    Challenge 📢 : ফাংশন টি তখন ই “invalid input” string টি রি টার্ন করবে ।
    ● যদি প্রথম প্যারামি টার টি Array না হয়
    ● যদি ও 2য় প্যারামি টার টি নাম্বার না হয়
    
*/



function monthlySavings(allPayments, livingCost){


    let earn = 0;
    for(let i = 0; i < allPayments.length; i++){
        let payment = allPayments[i];
        document.write(payment, ' payment');
        if(){

        }
    }

}
let payments = [2000, 4000, 5000];
let livingCost = 5400;

document.write(monthlySavings(payments, livingCost));














/*






function monthlySavings(allPayments, livingCost) {
    
    if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = 0;

    // Calculate total income after applying taxes
    for (let i = 0; i < allPayments.length; i++) {
        let payment = allPayments[i];
        if (payment > 3000) {
            payment *= 0.8; // Apply 20% tax to payments over 3000
        }
        totalIncome += payment;
    }

    // Calculate total savings after deducting living cost
    let totalSavings = totalIncome - livingCost;

    // Check if total savings are greater than or equal to 0
    if (totalSavings >= 0) {
        return totalSavings; // Return total savings if positive or 0
    } else {
        return "earn more"; // Return "earn more" if total savings are negative
    }
}

// Example usage:
let payments = [2000, 4000, 5000];
let livingCost = 2500;

console.log(monthlySavings(payments, livingCost)); // Output: 6200 (total savings)

