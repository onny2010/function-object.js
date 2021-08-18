var student1 = {
    id: 35,
    name: 'onny',
    marks: 28,
    mobile: 01523742,
    group: 'science'
};

var computer = {
    color: "black",
    price: 29000,
    storage: '256gb',
    brand: 'samsung'
}

console.log(computer);
var computerPrice = computer.price;
console.log(computerPrice);
console.log(computer.brand);
// set a object property
computer.storage = '500gb';
console.log(computer);


// different ways to set a value of an object property
var priceProperty = 'price';

// computer.price = 7000;
// computer['price'] = 10000;
computer[priceProperty] = 190000;
console.log(computer);