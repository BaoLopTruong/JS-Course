let number = 10000.56;

console.log(number.toLocaleString());

var number2 = 1000 // floating point example
console.log(number2.toLocaleString(undefined, {maximumFractionDigits:4})); // "1,234.57"


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


let num = prompt("Nhập một số bất kỳ");
function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

document.write(num + "=> " + formatNumber(num));     




