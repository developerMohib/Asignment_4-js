
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

/*
Problem 03 : Virus in my Array
⚠️ Function Name Must be deleteInvalids()
ত োমাকে deleteInvalids() নামে এমন একটা ফাংশন ক্রি য়ে ট করতে হবে যা ইনপুট হি সে বে একটি Array
নে বে । ফাংশন টি আরে কটি Array রি টার্ন করবে যে খানে ভ্যালুগুল ো হবে শুধুনাম্বার । অর্থাৎ Array এর যে সকল
elements নাম্বার না , তাদে র ডি লি ট করে শুধুমাত্র নাম্বার গুল ো কে Array আকারে রি টার্ন করতে হবে ।
তুমি যদি এই ফাংশনে এই [ NaN, 1,12,0 ,-1 , undefined ] Array টি পাস কর ো কর ো তাহলে সে ত োমাকে
রি টার্ন করবে [ 1 , 12 , 0 , -1 ]
Input :
ফাংশন টি ইনপুট নে বে একটি Array । Array এর উপাদান গুল োর Datatype যে ক োন ধরনে র হতে পারে ।
Output :
ফাংশন টি আউটপুট দে বে আরে কটি Array । Array এর উপাদান গুল ো হবে শুধুমাত্র নাম্বার ।
*/
