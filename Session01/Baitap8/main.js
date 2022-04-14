let n = parseInt(prompt("nhập số la mã"));
function convertToRomanNumber(n) {
    if(n >1000 || n< 0){
        n = parseInt(prompt("Vui lòng nhập lại số la mã( 0 < n < 1000"));
    }
    else{
        let S = n;
        let t, c, d;
        let tram =parseInt( S/100);
        S = S % 100;
        let chuc = parseInt( S/10);
        let dvi = S % 10;
        
        switch(tram){
            case 1: t ="C"; break;
            case 2: t ="CC"; break;
            case 3: t ="CCC"; break;
            case 4: t ="CD"; break;
            case 5: t ="D"; break;
            case 6: t ="DC"; break;
            case 7: t ="DCC"; break;
            case 8: t ="DCCC"; break;
            case 9: t ="CM"; 
        }

        switch(chuc){
            case 1: c ="X"; break;
            case 2: c ="XX"; break;
            case 3: c ="XXX"; break;
            case 4: c ="XL"; break;
            case 5: c ="L"; break;
            case 6: c ="LX"; break;
            case 7: c ="LXX"; break;
            case 8: c ="LXXX"; break;
            case 9: c ="XC"; 
        }

        
        switch(dvi){
            case 1: d ="I"; break;
            case 2: d ="II"; break;
            case 3: d ="III"; break;
            case 4: d ="IV"; break;
            case 5: d ="V"; break;
            case 6: d ="VI"; break;
            case 7: d ="VII"; break;
            case 8: d ="VIII"; break;
            case 9: d ="IX"; 
        }
        if(n<10){
            console.log(n + "=> " + d);
        }else if(n==10 || n==20 ||n ==30 || n== 40 || n==50 || n==60 || n==70 || n==80 || n==90){
            console.log(n + "=> " + c);
        }else if(n>10 && n <= 99){
            console.log(n + "=> " + c + d);
        }else if(n==100 || n==200 ||n ==300 || n== 400 || n==500 || n==600 || n==700 || n==800 || n==900){
            console.log(n + "=> " + t);
        }else if( n >100  && n <=999){
            if(!c){
                console.log("ko co")
                console.log(n + "=> " + t + d);
            }
            else{
                console.log("co");
                console.log(n + "=> " + t + c + d);
            }
        }
        
    }
}

convertToRomanNumber(n);
