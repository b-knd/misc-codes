//b-knd (jingru) on 01 July 2022

//changing values to cents to overcome the floating point number precision error
const map = {"PENNY": 1,
             "NICKEL": 5,
             "DIME": 10,
             "QUARTER": 25,
             "ONE": 100,
             "FIVE": 500,
             "TEN": 1000,
             "TWENTY": 2000,
             "ONE HUNDRED": 10000};

function checkCashRegister(price, cash, cid) {
    let target = (cash - price) * 100;
    let change = [];
    let status = "";

    //find total cash in register, add up all money in cash register by looping through non-zero cid values
    let sum = 0;
    //filter out cid with non-zero value
    let cidCopy = cid.filter(elem => elem[1] !== 0).reverse();
    for(let c in cidCopy){
        sum += cidCopy[c][1] * 100;
    }

    //if total sum is less than target change means not enough funds
    //if total sum equals target means all cash in cid will be used as change and thus status changes to "CLOSED"
    if(target > sum) {
        status = "INSUFFICIENT_FUNDS";
    } else if(target === sum) {
        status = "CLOSED";
        change = cid;
    } else{
        //deducting target by currency from highest to lowest until finish looping through all cash in register
        cidCopy.forEach(elem => {
            let current = elem[0];
            let currentSum = elem[1] * 100;
            let amount = 0;
            while(target >= map[current] && currentSum > 0){
                amount += map[current];
                currentSum -= map[current];
                target -= map[current];
            }

            if(amount !== 0){
                change.push([current, amount/100]);
            }
        });
    }

    /*
    at the end, if target === 0 means there is enough change and status is 'OPEN'; 
    if target > 0 (and target not equals to sum) means we cannot find exact change and status is change to "INSUFFICIENT_FUNDS"
    */
    if(target === 0){
        status = "OPEN";
    } else if(target > 0 && target !== sum) {
        status = "INSUFFICIENT_FUNDS";
        change = [];
    }

    return {"status": status, "change": change};
}


//TESTS
/*
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
*/
