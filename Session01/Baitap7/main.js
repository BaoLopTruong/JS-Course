let n = parseInt(prompt("nhập số tiền"));
function cashOut(n) {
    let n10, n20, n50;

    n50 = parseInt(n / 50);
    n -= (50 * n50);

    n20 = parseInt(n / 20);
    n -= 20 * n20;

    n10 = parseInt(n / 10);
    n -= 10 * n10;

    let S = n50 + n20 + n10 + n;
    
    console.log("Tổng số tờ tiền là:" + S);
    console.log("Trong đó: 50$: " + n50 + ", 20$: " + n20 + ", 10$: " + n10 + ", 1$: " + n);
}

cashOut(n);
