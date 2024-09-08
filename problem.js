//------------------------Find The max number in an array ---------

const height = [65,66,68,72,78,60,57]

function getMax(numbers){
    let max = numbers[0]
    for (const number of numbers){
        if(number > max){
            max = number
        }
    }
    return max
}
const max = getMax(height)
console.log('Max Number is: ', max)

//Output: Max Number is:  78

//------------------------Minimum Number --------------------------
const numberArray = [14,23,534,643,73,34]

function getMin(numbers){
    let min = numbers[0]
    for (const number of numbers){
        if(number < min){
            min = number
        }
    }
    return min
}
const min = getMin(numberArray)
console.log('Minimum Number is:', min)

//Output: Minimum Number is: 14

/*----------------------------------------------------------------
------use Add and Multiplication to calculat Wood Requirments ----
-----------------------------------------------------------------*/
function woodQuantity(chairQty, tableQty, bedQty){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQty * perChairWood;
    const tableTotalWood = tableQty * perTableWood;
    const bedTotalWood = bedQty * perBedWood;

    const totalWood = chairTotalWood  + tableTotalWood + bedTotalWood;
    return totalWood
}
const wood = woodQuantity(6,1,1)
console.log('Total Wood Needed:', wood , 'cft')


//Output:Total Wood Needed: 78 cft  

/*----------------------------------------------------------------
------Find The cheapest Phone From an array of phone Objects -----
-----------------------------------------------------------------*/

const phones = [
    { name : 'Samsung', price: 30000, ram: '4GB'},
    { name : 'Apple', price : 100000, ram : '4GB'},
    { name : 'oppo', price : 30000, ram : '4GB'},
    { name : 'vivo', price : 30000, ram : '4GB'},
    { name : 'Readme', price : 30000, ram : '4GB'},
]

function getCheapestPhone (phones){
    let min = phones[0]
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
    }
    return min
}

const cheapest = getCheapestPhone(phones)
console.log('cheapest phone is:', cheapest)

//Output: cheapest phone is: { name: 'Apple', price: 10000, ram: '4GB' }

//---------------- Heigest phone Price----------------------------

function heigestPhone(phones){
    let max = phones[0]
    for(const phone of phones){
        if(phone.price > max.price)[
            max = phone
        ]
    }
    return max
}
const heighPhone = heigestPhone(phones)
console.log("Heigest price phone is", heighPhone)

//Output: Heigest price phone is { name: 'Apple', price: 100000, ram: '4GB' }


/*----------------------------------------------------------------
------Calculate Total cost of the Product in a shopping cart -----
-----------------------------------------------------------------*/

const products = [
    { name: 'Shirt', price: 500, quantity: 2, },
    { name: 'Pant', price: 1000, quantity: 1 ,},
    { name: 'Perfume', price: 400, quantity: 2 ,},
]

function shopping(products){
    let total = 0;
    for(const product of products){
        const productCost = product.price * product.quantity;
        total = total + productCost;
    }
    return total
}

const totalPrice = shopping(products)
console.log('Total Shoppin cost is =', totalPrice)

//Output: Total Shoppin cost is = 2800

//------------------------ ----------------------------------------
//------------------------ ----------------------------------------
//------------------------ ----------------------------------------
//------------------------ ----------------------------------------
//------------------------ ----------------------------------------
//------------------------ ----------------------------------------
//------------------------ ----------------------------------------
//------------------------ ----------------------------------------
//------------------------ ----------------------------------------
//------------------------ ----------------------------------------