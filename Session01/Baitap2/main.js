let number = parseFloat(prompt("Nhập một số bất kỳ"));
let x = prompt("Nhập số chữ số sau dấu phẩy");

function formatWallet(number,x){
    if(number< 1000){
        number = parseFloat(prompt("Vui lòng nhập lại (số tiền phải từ 1000 trở lên"));

    }
    else{
       console.log(number + " => " + (number/1000).toFixed(x) + "K");
    }
}

formatWallet(number,x);


