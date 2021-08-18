function bringShingara(taka) {
    console.log('Singarar jonno dise', taka);
    console.log('singara den mama');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 250;
var singara = bringShingara(money);
console.log('ei nen mama singara', singara);