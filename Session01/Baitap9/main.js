let n = parseInt(prompt("nhập số ngẫu nhiên"));
function readNumber(n) {
    if(n >1000000 || n< 0){
        n = parseInt(prompt("Vui lòng nhập lại số la mã( 0 < n < 1000000"));
    }
    else{
        let S = n;
        let t, c, d, ng, cn, tn;
        let tramnghin = parseInt( S/100000);
        S = S % 100000;
        let chucnghin = parseInt( S/10000);
        S = S % 10000;
        let ngan = parseInt(S/1000);
        S = S % 1000;
        let tram = parseInt(S/100);
        console.log(tram);
        S = S % 100;
        let chuc = parseInt( S/10);
        console.log(chuc);
        let dvi = S % 10;
        console.log(dvi);
        
        switch(tramnghin){
            case 1: tn= "mười" ; break;
            case 2: tn ="hai mươi"; break;
            case 3: tn ="ba mươi"; break;
            case 4: tn ="bốn mươi"; break;
            case 5: cn ="năm mươi"; break;
            case 6: tn ="sáu mươi"; break;
            case 7: tn ="bảy mươi"; break;
            case 8: tn ="tám mươi"; break;
            case 9: tn ="chín mươi"; 
        
        }
        switch(chucnghin){
            case 1: cn= "một"; break;
            case 2: cn ="hai"; break;
            case 3: cn ="ba"; break;
            case 4: cn ="bốn"; break;
            case 5: cn ="năm"; break;
            case 6: cn ="sáu"; break;
            case 7: cn ="bảy"; break;
            case 8: cn ="tám"; break;
            case 9: cn ="chín"; 
        
        }
        switch(ngan){
            case 1: ng= "một ngàn"; break;
            case 2: ng ="hai ngàn"; break;
            case 3: ng ="ba ngàn"; break;
            case 4: ng ="bốn ngàn"; break;
            case 5: ng ="năm ngàn"; break;
            case 6: ng ="sáu ngàn"; break;
            case 7: ng ="bảy ngàn"; break;
            case 8: ng ="tám ngàn"; break;
            case 9: ng ="chín ngàn"; 
        
        }
        
        switch(tram){
            case 1: t ="một trăm"; break;
            case 2: t ="hai trăm"; break;
            case 3: t ="ba trăm"; break;
            case 4: t ="bốn trăm"; break;
            case 5: t ="năm trăm"; break;
            case 6: t ="sáu trăm"; break;
            case 7: t ="bảy trăm"; break;
            case 8: t ="tám trăm"; break;
            case 9: t ="chín trăm"; 
           // default: t="không trăm";
        }

        switch(chuc){
            case 1: c ="mười"; break;
            case 2: c ="hai mươi"; break;
            case 3: c ="ba mươi"; break;
            case 4: c ="bốn mươi"; break;
            case 5: c ="năm mươi"; break;
            case 6: c ="sáu mươi"; break;
            case 7: c ="bảy mươi"; break;
            case 8: c ="tám mươi"; break;
            case 9: c ="chín mươi"; 
        }

        
        switch(dvi){
            case 1: d ="mốt"; break;
            case 2: d ="hai"; break;
            case 3: d ="ba"; break;
            case 4: d ="tư"; break;
            case 5: d ="lăm"; break;
            case 6: d ="sáu"; break;
            case 7: d ="bảy"; break;
            case 8: d ="tám"; break;
            case 9: d ="chín"; 
        }
        console.log(tn,cn,ng,t,c,d)
        if(n<10){
            if(dvi ==1){
                console.log(n + "=> " + "một");
            }else if(dvi==5){
                console.log(n + "=> " + "năm");
            }

            else{
                console.log(n + "=> " + d);
            }
           
        }else if(n==10 || n==20 ||n ==30 || n== 40 || n==50 || n==60 || n==70 || n==80 || n==90){
            console.log(n + "=> " + c);
        }else if(n>10 && n<=99 ){
            if((chuc==1) && (dvi==1)){
                
                console.log(n + "=>" + c + "một");
            }
            else{
                console.log(n + "=> " + c + d);
            }
            
        }else if(n==100 || n==200 ||n ==300 || n== 400 || n==500 || n==600 || n==700 || n==800 || n==900){
            console.log(n + "=> " + t);
        }else if( n >100  && n <=999){
            if(chuc==0){
                
                console.log(n + "=>" + t + " linh " + d);
            }
            else{
                if((chuc==1) && (dvi==1)){
                
                    console.log(n + "=>" + t + c + "một");
                }
                else if(tram==0){

                }
                else{
                    console.log(n + "=> " + t + " " + c + " "+ d);
                }
                // console.log(n + "=> " + t +  c + d);
            }
        }else if(n ==1000 || n==2000 || n==3000 || n==4000  || n==5000  || n==6000  || n==7000 || n==8000  || n==9000){
                console.log(n + "=> " + ng);
        }else if(n>1000 && n<=9999){
            if(!tram){
                if(!chuc){
                    if(dvi==1){
                            console.log(n + "=> " + ng + " không trăm linh  một" );
                        }else if(dvi==5){
                            console.log(n + "=> " + ng + " không trăm linh  năm" );
                        }
                        else{
                            console.log(n + "=> " + ng + " không trăm linh " + d);
                        }
                }else{
                    if(dvi==1){
                        console.log(n + "=> " + ng + " không trăm " + c+ " một" );
                    }
                    else{
                        console.log(n + "=> " + ng + " không trăm " + c+ " " + d);
                    }
                    
                }
                
            }else{
                if(dvi==1){
                    console.log(n + "=> " + ng + " " + t + " " + c + " một");
                }
                else{
                    console.log(n + "=> " + ng + " " + t + " " + c + " "+ d);
                }
                
            }

    }else if(n ==10000 || n==20000 || n==30000 || n==40000  || n==50000  || n==60000  || n==70000 || n==80000  || n==90000){
            console.log(n + "=> " +  cn + " vạn");
    }else if(n>10000 && n<=99999){
    
        if(!ngan){
            if(!tram){
                if(!chuc){
                    if(dvi==1){
                            console.log(n + "=> " +cn + " vạn không trăm linh  một" );
                        }else if(dvi==5){
                            console.log(n + "=> " +cn + " vạn không trăm linh  năm" );
                        }
                        else{
                            console.log(n + "=> " +cn + " vạn không trăm linh " + d);
                        }
                }else{
                    if(dvi==1){
                        console.log(n + "=> " + cn + " vạn không trăm " + c+ " một" );
                    }else{
                        console.log(n + "=> " + cn + " vạn không trăm " + c+ " " + d);
                    }
                    
                }
                
            }else{
                if(dvi==1){
                    console.log(n + "=> " + cn + " vạn " + t + " " + c + " một");
                }
                else{
                    console.log(n + "=> " + cn + " vạn " + t + " " + c + " "+ d);
                }
            }
        }else{
            if(!tram){
                if(!chuc){
                    if(dvi==1){
                            console.log(n + "=> " +cn +" vạn " + ng+ " không trăm linh  một" );
                        }else if(dvi==5){
                            console.log(n + "=> " +cn +" vạn " + ng+ " không trăm linh  năm" );
                        }
                        else if(dvi==0){
                            console.log(n + "=> " +cn +" vạn " + ng);
                        }else{
                            console.log(n + "=> " +cn +" vạn " + ng+ " không trăm linh " + d);
                        }
                }else{
                    if(dvi==1){
                        console.log(n + "=> " + cn +" vạn " + ng+ " không trăm " + c+ " một" );
                    }else{
                        console.log(n + "=> " + cn+" vạn " + ng + " không trăm " + c+ " " + d);
                    }
                    
                }
                
            }else{
                if(dvi==1){
                    console.log(n + "=> " + cn+" vạn " + ng + "  " + t + " " + c + " một");
                }
                else{
                    console.log(n + "=> " + cn+" vạn " + ng + "  " + t + " " + c + " "+ d);
                }
            }

        }
    }else if(n ==100000 || n==200000 || n==300000 || n==400000  || n==500000  || n==600000  || n==700000 || n==800000 || n==900000){
        console.log(n + "=> " +  tn + " vạn");
    }else if(n>100000 && n<=999999){
        if(!cn){
            if(!ngan){
                if(!tram){
                    if(!chuc){
                        if(dvi==1){
                                console.log(n + "=> " +tn + " vạn linh  một" );
                            }else if(dvi==5){
                                console.log(n + "=> " +tn + " vạn linh  năm" );
                            }
                            else{
                                console.log(n + "=> " +tn + " vạn  linh " + d);
                            }
                    }else{
                        if(dvi==1){
                            console.log(n + "=> " + tn + " vạn không trăm " + c+ " một" );
                        }else{
                            console.log(n + "=> " + tn + " vạn không trăm " + c+ " " + d);
                        }
                        
                    }
                    
                }else{
                    if(dvi==1){
                        console.log(n + "=> " + tn + " vạn " + t + " " + c + " một");
                    }
                    else{
                        console.log(n + "=> " + tn + " vạn " + t + " " + c + " "+ d);
                    }
                }
            }else{
                if(!tram){
                    if(!chuc){
                        if(dvi==1){
                                console.log(n + "=> " +tn +" vạn " + ng+ " không trăm linh  một" );
                            }else if(dvi==5){
                                console.log(n + "=> " +tn +" vạn " + ng+ " không trăm linh  năm" );
                            }
                            else if(dvi==0){
                                console.log(n + "=> " +tn +" vạn " + ng);
                            }else{
                                console.log(n + "=> " +tn +" vạn " + ng+ " không trăm linh " + d);
                            }
                    }else{
                        if(dvi==1){
                            console.log(n + "=> " + tn +" vạn " + ng+ " không trăm " + c+ " một" );
                        }else{
                            console.log(n + "=> " + tn +" vạn " + ng + " không trăm " + c+ " " + d);
                        }
                        
                    }
                    
                }else{
                    if(dvi==1){
                        console.log(n + "=> " + tn+" vạn " + ng + "  " + t + " " + c + " một");
                    }
                    else{
                        console.log(n + "=> " + tn+" vạn " + ng + "  " + t + " " + c + " "+ d);
                    }
                }
    
            }

        }else{
            if(!ngan){
                if(!tram){
                    if(!chuc){
                        if(dvi==1){
                                console.log(n + "=> " +tn+ " " + cn + " vạn linh  một" );
                            }else if(dvi==5){
                                console.log(n + "=> " +tn+ " " + cn + " vạn linh  năm" );
                            }
                            else if(dvi==0){
                                console.log(n + "=> " +tn+ " " + cn + " vạn" );
                            }
                            else{
                                console.log(n + "=> " +tn+ " " + cn + " vạn  linh " + d);
                            }
                    }else{
                        if(dvi==1){
                            console.log(n + "=> " + tn + " " + cn + " vạn không trăm " + c+ " một" );
                        }else if(dvi==0){
                            console.log(n + "=> " + tn + " " + cn + " vạn không trăm " + c);
                        }
                        else{
                            console.log(n + "=> " + tn + " " + cn + " vạn không trăm " + c+ " " + d);
                        }
                        
                    }
                    
                }else{
                    if(dvi==1){
                        console.log(n + "=> " + tn + " " + cn + " vạn " + t + " " + c + " một");
                    }
                    else{
                        console.log(n + "=> " + tn + " " + cn + " vạn " + t + " " + c + " "+ d);
                    }
                }
            }else{
                if(!tram){
                    if(!chuc){
                        if(dvi==1){
                                console.log(n + "=> " +tn + " " + cn + " vạn " + ng+ " không trăm linh  một" );
                            }else if(dvi==5){
                                console.log(n + "=> " +tn + " " + cn + " vạn " + ng+ " không trăm linh  năm" );
                            }
                            else if(dvi==0){
                                console.log(n + "=> " +tn + " " + cn +" vạn " + ng);
                            }else{
                                console.log(n + "=> " +tn + " " + cn +" vạn " + ng+ " không trăm linh " + d);
                            }
                    }else{
                        if(dvi==1){
                            console.log(n + "=> " + tn + " " + cn +" vạn " + ng+ " không trăm " + c+ " một" );
                        }else{
                            console.log(n + "=> " + tn + " " + cn +" vạn " + ng + " không trăm " + c+ " " + d);
                        }
                        
                    }
                    
                }else{
                    if(dvi==1){
                        console.log(n + "=> " + tn+ " " + cn +" vạn " + ng + "  " + t + " " + c + " một");
                    }
                    else{ 
                        console.log(n + "=> " + tn+ " " + cn +" vạn " + ng + "  " + t + " " + c + " "+ d);
                    }
                }
    
            }

        }
    }




    //end else
    }
}

readNumber(n);
