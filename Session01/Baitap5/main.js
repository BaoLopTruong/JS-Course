let array =[0, 1, 3, 4 , 5, 7, 6, 8, 9, 11 ];

function loop(array){
    for(let i =0; i< array.length; i++){
        console.log("array["+i+"]=" + array[i]);
    }
}
function getRandomElement(array){
    loop(array);
    let a =Math.floor(Math.random() * array.length);
    console.log(a);
    let mangB =array.splice(a,1);
    console.log(mangB);
    loop(array);

}

getRandomElement(array);