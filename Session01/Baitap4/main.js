let array =[0, 1, 3, 4 , 5, 7, 6, 8, 9, 11 ];

function getRandomElement(array){
    for(let i =0; i< array.length; i++){
        console.log("array["+i+"]=" + array[i]);
    }
    let a =Math.floor(Math.random() * array.length);
    // console.log(a);
    // console.log(array[a]);
    console.log("phan tu ngau nhien array["+a+"]=" + array[a]);
}

getRandomElement(array);