
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
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) === 'number' && !isNaN(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
let array = [NaN, 1, 12, 0, -1, undefined];
let callArray = deleteInvalids(array);
document.write(callArray)
