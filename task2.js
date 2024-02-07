
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
        // document.write(stuffCost , ' stuff cost of baker bai <br>');
    
        let earnOfBakerBhai = ticketPrice * ticketSale;
        // document.write(earnOfBakerBhai , ' earn of baker bai <br>');
    
        let costOfBakerBhai = costGateKeeper + stuffCost;
        // document.write(costOfBakerBhai , ' cost of baker bai <br>');
        
        let saveMoney = earnOfBakerBhai - costOfBakerBhai;
        return saveMoney;
    }
}

let bakerVai = calculateMoney( '1055' );
document.write(bakerVai , ' <br>');



// task 2

function checkName(name){
    let myName = name;
    // number problem how to solve ???? 
    // array problem how to solve ??

    myName = myName.toLowerCase();

    if(typeof(myName) !== 'string'){
        return 'Give Us a Name or string word.'
    }

    else if( myName.slice(-1) === 'a' || myName.slice(-1) === 'e' || myName.slice(-1) === 'i' || myName.slice(-1) === 'o' || myName.slice(-1) === 'u' || myName.slice(-1) === 'y' || myName.slice(-1) === 'w' ){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
}
let myName = checkName('moOOhibOO' );
document.write(myName , ' <br> ');

// Task 3


function deleteInvalids(array) {
    let newArray = [];
    if(!Array.isArray(array)){
        return 'frist know what is array, then give command';
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === 'number' && !isNaN(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
let array = [NaN, 1, 12, 0, -1, undefined, 'mohib'] ;
let callArray = deleteInvalids(array);
document.write(callArray)

/*

️ Function Name Must be password()
কলি মুদ্দি ন সাহে ব নতুন ফ োন কি নে বি ভি ন্ন ওয়ে বসাইটে ভি জি ট করে ন এবং বি ভি ন্ন এপ্লি কে শনে একাউন্ট ক্রি য়ে ট
করে ন । কি ন্তু তি নি পাসওয়ার্ড মনে রাখতে পারে ন না । তি নি এমন একটি ফাংশন চান, যে খানে তার ইনফরমে শন
এবং ওয়ে বসাইট নে ম দি লে সে টা কলি মুদ্দি ন সাহে ব কে একটি মনে রাখার মত ো পাসওয়ার্ড জে নারে ট করে দি তে
পারবে ।
তার জন্য password() নামে একটা ফাংশন লি খতে হবে ।
Input :
ফাংশন টি একটা object ইনপুট হি সে বে নি বে । যে খানে শুধুতি ন টি প্র োপার্টি থাকবে ।
{ name: “kolimuddin” , birthYear: 1999 , siteName: “google” }
⚠️ অব্জে ক্ট এ প্র োপার্টি গুল োর নাম একদম সে ইম হতে হ

SAMPLE INPUT SAMPLE OUTPUT
{ name: “kolimuddin” , birthYear: 1999 , siteName: “google” } Google#kolimuddin@1999
{ name: “rahat” , birthYear: 2002, siteName: “Facebook” } Facebook#rahat@2002
{ name: “toky” , birthYear: 200, siteName: “Facebook” } invalid
{ name: “maisha” , birthYear: 2002 } invalid

Output:
ফাংশন টি উপরে র স্ট্রাকচার অনযু ায়ী একটা স্ট্রি ং আউটপুট আকারে রি টার্ন করবে ।
Google#kolimuddin@1999
Challenge 📢: যদি ক োন একটা প্র োপার্টি মি সি ং থাকে অথবা যদি birthYear 4 ডি জি টে র না হয় ফাংশন টি
রি টার্ন করবে একটি স্ট্রি ং যার ভ্যালুহবে “invalid”।


*/

function password(obj) {
    let name = obj.name;
    let birth = obj.birthYear;
    let site = obj.siteName;

    // reverse kora lagbe-------join kora lagbe ---- first letter big


    let vaierPass = name + birth + site;
    return vaierPass ;


}

let kolimBhai = password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' });
console.log(kolimBhai);
document.write(kolimBhai)


