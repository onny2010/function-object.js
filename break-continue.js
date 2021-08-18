// var i = 0;

// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }


// for loop
// for (var i = 0; i <= 10; i++) {
//     console.log(i);
//     if (i == 8) {
//         break;
//     }
// }

// array 
var numbers = [28, 35, 28, 40, 50, 40, 90, 105, 89, 98];
// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number == 90) {
//         break;
//     }
// }
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 40) {
        continue;
    }
    console.log(number);
}