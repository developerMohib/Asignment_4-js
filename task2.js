
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

function checkName(name){
    let myName = name;

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

function password(obj) {

    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName')) {
        return 'invalid';
    }

    let name = obj.name;
    let birth = obj.birthYear ;
    let site = obj.siteName;

    let siteName = site.charAt(0).toUpperCase() + site.slice(1);

    console.log(birth !== 'number');
    console.log(birth.toString().length !==4 );

    if(birth === 'number' || birth.toString().length !== 4 ){
        return 'invalid'
    }
    
    let allConcat = siteName.concat('#', name, '@', birth);
    return allConcat ;
}

let mypass = password({name : 'mohib', birthYear : 1999, siteName: 'goolge'});
document.write('my Password : ', mypass);




function monthlySavings(earnMoney,liveCost){
    if(!Array.isArray(earnMoney) || typeof liveCost !== "number"){
           return 'invalid'
       }
    let totalEarn = 0;
    for(const earning of earnMoney){
       totalEarn += earning;
    }
   
    let upto3000 =[];
   for(const earning of earnMoney){
       if(earning >= 3000){
      upto3000.push(earning);
       }
   }
     let totalTaxMoney = 0;
   for(const taxMoney of upto3000){
       totalTaxMoney += taxMoney;
   }
    const tax = totalTaxMoney * 20 / 100;
    const totalCost = tax + liveCost;
   
    const monthlySave = totalEarn - totalCost;
    if(monthlySave < 0){
       return "earn more"
    }else{
       return monthlySave;
    }
   
   }
