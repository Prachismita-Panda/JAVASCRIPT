/*function addition(a,b){
    var s=a+b;
    return s;

}
var add=addition;
console.log(add);
console.log(addition(10,20));
console.log(addition(20,30));*/

/*function addition(a,b){
    return a+b;
}
console.log(addition(20,30));*/

/*const addition=(a,b)=>{
    return a+b;
}
console.log(addition(20,30));*/

/*const addition=(a,b,c,d,e)=> console.log(a+b+c+d+e);
addition(10,20,30,40,50);*/
/*function addition(a,b){
   console.log(a+b);
}
addition(20,30);*/

/*function addition(...nums){
    console.log(nums);
    console.log(...nums);
}
addition(10,20,30,40,50);*/   

/*function addition(...nums){
    var s=0;
    for(var i=0;i<nums.length;i++){
        s=s+nums[i];
    } return s;
    
}
console.log(addition(10,20,30,40,50)); */

function addition(...nums,a){
    console.log(a);
    console.log(nums);
    console.log(...nums);
}
addition(10,20,30,40,50);
