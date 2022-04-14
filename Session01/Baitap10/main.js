const array = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    
];
let dem =5;
let newArray= [];

for(let i=0; i<3; i++){
    if( array[i][0]==0){
        for(let j=0;j<5;j++){
            if(array[i][j]==0){
                newArray.push("0")
            }
        }
        
;    }

}

console.log(newArray);