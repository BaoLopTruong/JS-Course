let array =[0, 1, 3, 4 , 5, 7, 6, 8, 9, 11 ];

let bray = [33, 45, 6, 1, 10, 5];

let missingArray= [];

function  findMissingElements(arr1, arr2) {
    
        for(let j=0; j< arr2.length; j++){
            if(arr1.includes(arr2[j]) == true){
                continue;
            }
            else{
                missingArray.push(arr2[j]);
            }
        }
    }
    
console.log("array", array);
console.log("bray",bray);
findMissingElements(array, bray);
console.log("missingArray",missingArray);