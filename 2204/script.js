/*function display(){
    console.log("Hello");
}
function show(){
    console.log("World");
}
display();
show();*/

/*function display(){
    console.log("Hello");
}
function show(callback){
    
    callback();
    console.log("World");
}
show(display);*/

/*function lastDigit(){
    var n=143;
    var p=n%10;
    console.log("The number is",n);
    console.log("Last digit is",p);
}
function display(callback){
    callback();

}
display(lastDigit);*/

/*function prime(){
    var n=31;
    var c=0;
    for(var i=0;i<=n;i++){
        if(n%i==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log("The number is prime.");
    }
    else{
        console.log("The number is not prime.")
    }

}
function display(callback){
    callback();
}
display(prime);*/

/*function prime(n){
   
    var c=0;
    for(var i=0;i<=n;i++){
        if(n%i==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log("The number is prime.");
    }
    else{
        console.log("The number is Composite.")
    }

}
function display(n,callback){
    callback(n);
}
var n=31;
display(n,prime);*/

/*function prime(n,callback){
    var c=0;
    for(var i=1;i<=n;i++){
        if(n%i==0){
            c++;
        }
    }
    callback1(c);
}

function display(n,callback,callback1){
    callback(n,callback1);
}
function checkPrime(c){
    if(c==2){
        console.log("The number is prime");
    }
    else{
        console.log("The number is composite.");
    }
}
var n=70;
display(n,prime,callback1);*/

/*function display(){
    console.log("World");
    return function show(){
        console.log("Hello");
    }
}
const myFunc=display();
console.log(myFunc);
myFunc();*/

/*function display(callback){
    callback();
    console.log("World");
}
display(function (){
    console.log("Hello");
});*/

/*function display(callback){
    callback();
    console.log("World");
}
display( ()=> console.log("Hello"));*/

/*function lastDigit(n,callback){
    n=n%10;
    callback(n);
}
var n=159;
lastDigit(n,(n)=>console.log("The last digit is",n));*/

/*function lastDigit(callback){
    var ans=callback(145);
    console.log(ans);
}
lastDigit((n)=>n%10);*/

/*function lastDigit(callback){
    return callback(145);
    
}
console.log(lastDigit((n)=>n%10));*/

/*var arr=[10,20,30,40,50,60,70,80,90,100];
arr.forEach((item)=>{
    console.log(item);
});*/

/*var arr=[1,2,3,4,5,6,7,8,9,10];
var s=0;
arr.forEach((item)=>{
    s=s+item;
    
});                                                                                 
console.log(s);*/

/*var arr=[1,2,3,4,5,6,7,8,9,10];
var s=0;
const ans=arr.forEach((item)=>{
    s=s+item;
    return s;
});
console.log("Sum is",s);
console.log(ans); */

/*var arr=[1,2,3,4,5,6,7,8,9,10];
arr.map((item)=>{
    console.log(item);
});*/

/*var arr=[1,2,3,4,5,6,7,8,9,10];
const ans=arr.map((item)=>{
    console.log(item);
});
console.log(ans);*/

/*var arr=[1,2,3,4,5,6,7,8,9,10];
const ans=arr.map((item)=>{
    return item+10;
});
console.log(ans);*/

/*var arr=[1,2,3,4,5,6,7,8,9,10];
s=0;
const ans=arr.map((item)=>{
    return (s+=item);
});
console.log(ans);*/


var arr=[10,20,30,40,50,60,70,80,90,100];
s=0;
const ans=arr.filter((item)=>{
    return item>40;
});
console.log(ans);

