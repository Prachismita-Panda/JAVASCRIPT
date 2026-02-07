/* without return type without parameter*/
/*
function addition(){
    var a=10;
    var b=20;
    var s=a+b;
    console.log("First number =",a);
    console.log("Second numbetr=",b);
    console.log("Sum is",s);

}
addition();*/

/* with return type without parameter*/
/*function addition(){
    var a=10;
    var b=20;
    var s=a+b;
    console.log("First number =",a);
    console.log("Second number=",b);
    return s;
}
s=addition();
console.log("Sum is =",s);*/

/*without return type with parameter*/
/*function addition(a,b){
    var s=a+b;
    console.log("Sum is =",s);
}
var a=10;
var b=20;
console.log("First number is :",a);
console.log("Second number is:",b);
addition(a,b);*/

/*with return type with parameter*/
/*
function addition(a,b){
    s=a+b;
    return s;
}
var a=10;
var b=20;
var s;
console.log("First number is ",a);
console.log("Second number is ",b);
s=addition(a,b);
console.log("Sum is ",s);*/

/*Prime numbers using function-without return type without parameter*/
/*function checkPrime(){
    var n=5;
    var i;
    var c=0;
    console.log("The number is :",n);
    for(i=1;i<=n;i++){
            if(n%i==0){
                c++;
            }
        }
    if(c==2){
            console.log("The number is prime.");
        }
    else{
    console.log ("The number is not prime.");
    }
}
checkPrime();*/

/*Prime numbers using function-with return type without parameter*/
/*function checkPrime(){
    var n=5;
    var i;
    var c=0;
    for(i=1;i<=n;i++){
            if(n%i==0){
                c++;
           }
        }
        return c;
}
c=checkPrime();
    if(c==2){
        console.log("The number is prime . ");
    }
    else{
        console.log("Number is not prime.");
} */

/* Prime numbers using function -with parameter without return type*/
/*function checkPrime(n){
    var i;
    var c=0;
    
    for(i=1;i<=n;i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        console.log("The number is prime.");
    }
    else{
        console.log("The number is not prime.")
    }
}

    var  n=5;
    console.log("The number is: ",n);
    checkPrime(n);*/

/* Prime numbers using function- with parameter with return type*/
/*function checkPrime(n){
    var i;
    var c=0;
    for(i=1;i<=n;i++){
        if(n%i==0){
            c++;
        }
    }
    return c;
}
 var n=5;
 var c;
console.log("The number is :",n);
c=checkPrime(n);
if(c==2){
    console.log("The number is prime.");
}
else{
    console.log("The number is not prime.");
}*/

/*const addition = function (){
    var a=10;
    var b=20;
    var s=a+b;
    console.log("First number =",a);
    console.log("Second number =",b);
    console.log("Sum is ",s);
}
addition();*/

/*const addition = function(){
    var a=10;
    var b=20;
    var s=a+b;
    console.log("First number =",a);
    console.log("Second number =",b);
    return s;
}
var s;
s=addition();
console.log("Sum is ",s);*/

/*const addition=function(a,b){
    var s=a+b;
    console.log("Sum is",s);
}
var a=10;
var b=20;
console.log("first number ",a);
console.log("Second number ",b);
addition(a,b);*/    

/*const addition=function(a,b){
    var s=a+b;
    return s;
   
}
var a=10;
var b=20;
var s;
console.log("first number ",a);
console.log("Second number ",b);
s=addition(a,b); 
console.log("Sum is",s);*/

/*const addition=()=>{
    var a=10;
    var b=20;
    var s=a+b;
    console.log("First number=",a);
    console.log("Second number=",b);
    console.log("Sum is ",s);

}
addition();*/

/*const addition=(a,b)=>{
    
    var s=a+b;
    console.log("Sum is ",s);

}
var a=10;
var b=20;
console.log("First number=",a);
console.log("Second number=",b);
addition(a,b);*/

/*const addition=(a,b)=>{
    var s=a+b;
    return s;
}
var a=10;
var b=20;    
console.log("First number=",a);
console.log("Second number=",b);
var s=addition(a,b);
console.log("Sum is ",s);
*/

/*function armstrong(){
    var n = 153, m;
    var c=0,s=0;
    while(n!=0){
        c++;
        n = parseInt(n/10);
    }
    n = m;
    for(i=1; i<=c; i++){
        d = n%10;
        p = 1;
        for(j=1; j<=c; j++){
            p = p*d;
            s = s+p;
            n = parseInt(n/10);
        }
    }
    if(s==m){
        console.log("The number is armstrong no");
    }else{
        console.log("The number is not a armstrong");
    }
}
armstrong();*/



    

