
let arr = [5,7,9,1,9,6];
let i,largest,secLarge;

console.log(secondLargest(arr));

function secondLargest(arr){

    for(i=1;i<arr.length;i++){
        largest = arr[i];
        if(arr[i] > largest){
            
            secLarge = largest;
            largest = arr[i];
           
        }
         
    }

    return secLarge;

}
console.log(arr); 





 
