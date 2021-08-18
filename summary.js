var skycolor = 'white';

var phones = ['iphone', 'samsung', 'xiaomi', 'lg', 'htc'];
phones[1] = 'walton';

// check element exists in an array
if (phones.indexOf('vivo') == -1) {
    console.log('oops! amir khan, vivo is missing');
}

if (phones.indexOf('lg') != -1) {
    console.log('Lg phone is available');
}