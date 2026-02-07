/* display name,hobby
console.log("Prachismita");
console.log("Hobbies are:");
console.log("Listening Music")
*/

/* sum of first two digit anf multiplication of secon and third digit
var a=5;
var b=7;
var c=9;
s=a+b;
m=b*c;
console.log("First number =",a);
console.log("Second number=",b);
console.log("Third number=",c);
console.log("Sum of first and second number is=",s);
console.log("Multiplication of second and third numbers =",m);
*/

/* Area of a circle
var r=5 ;
pi=3.1416;
area=pi*r*r;
console.log("Radius of circle :",r);
console.log("Area of circle:",area);
*/

/* Total mark and percn=entage
var maths=50;
var science =75;
var english=93;
total_marks=maths+science+english;
total_percentage=parseInt(total_marks/3);
console.log("Total marks obtained:",total_marks);
console.log("Total percentage: ",total_percentage);
*/

/*Last digit
var n=543;
var a=n%10;
console.log("The last digit is:",a);
*/

/*Second digit
var n=543;
var a=n%10;
var b=parseInt(n/10);
var c=b%10;
console.log("The second digit is:",c);
*/

/*First digit
var n=543;
var a=n%10;
var b=parseInt(n/10);
var c=b%10;
var d=parseInt(b/10);
console.log("The First digit is:",d);
*/

/*Positive and negtive
var n=5;
if(n>=0){
    console.log("The number is positive");
}
else{
    console.log("The number is negative.");
}
*/

/*Even nad Odd
var n=10;
if(n%2==0){
    console.log("The number is even.");
}
else{
    console.log("The number is odd.");
}
    */

/* divisible by 2 nad 3
var n=6;
if(n%2==0 && n%3==0){
    console.log("The number is divisible by both 2 and 3.");

}
else{
    console.log("The number is not divisible by 2 nad 3.");
}*/

/* BIggest number among 3
var a=5;
var b=7;
var c=1;
if(a>b && a>c){
        console.log("The biggesr number is:",a);
}
else if(b>a && b>c){
    console.log("The biggest number is:",b);
}
else{
    console.log("The biggest number is:",c);
}*/

/* display from 1 to 10
var i=1;
for(i=1; i<=10; i++){
    console.log(i);
}
*/
/*
var n=[10,20,30,40,50];
var i;
for(i=0;i<5;i++){
    console.log(n[i]);
}*/
 
/*var n=[10,20,30,40,50];
var i;
var s=0;
for(i=0;i<n.length;i++){
    s=s+n[i];
}
console.log("Sum is:",s)*/

/*var n=[1,2,3,4,5,6,7,8,9,10];
var i;
for(i=n.length;i>=0;i--){
    console.log(n[i]);
}*/

/*var n=[1,2,3,4,5,6,7,8,9,10];
var i;
for(i=0 ; i<10 ; i++){
    if(n[i]%2==0){
        console.log(n[i]);
    }
}*/

/*var n=[1,2,3,4,5,6,7,8,9,10];
var i;
console.log("All the numbers are:")
    for(i=0;i<n.length;i++){
        console.log(n[i]);
    }
console.log("Even numbers are:")
    for(i=0 ; i<n.length ; i++){
        if(n[i]%2==0){
            console.log(n[i]);
        }
    }
console.log("Odd numbers are:")
for(i=0;i<n.length;i++){
    if(n[i]%2!=0){
        console.log(n[i]);
    }
}*/

/*var n=[1,2,3,4,5,6,7,8,9,10];
var i;
var s=0;
console.log("Even numbers are:");
for(i=0;i<n.length;i++){
    if(n[i]%2==0){
        console.log(n[i]);
        s=s+n[i];
    }
}
console.log("sum is :",s);*/

/*var n=[1,2,3,4,5,6,7,8,9,10];
var i; var j; var c;
console.log("Prime numbers are:");
for(i=0;i<n.length;i++){
    let c=0;
    for(j=1;j<=n[i];j++){
        if(n[i]%j==0){
            c++;
        }
    }
    if(c==2){
        console.log(n[i]);
    }
}*/

/*var n=[1,2,3,4,5,6,7,8,9,10];
var i;
console.log("Array elements are:");
for(i=0;i<n.length;i++){
    console.log(n[i]);
}
console.log("Array elements are:");
for(i=0;i<n.length-1;i++){
    console.log(n[i]);
}*/

/*var n=[1,2,3,4,5,6,7,8,9,10];
var i;
console.log("Array elements are:");
for(i=0;i<n.length;i++){
    console.log(n[i]);
}

for(i=0;i<n.length;i++){
    n[i]=n[i+1];
    
}
console.log("Array elements after deletion is:");
for(i=0;i<n.length-1;i++){
    console.log(n[i]);
    
}*/


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

const addition=()=>{
    var s=a+b;
    return s;
}
var a=10;
var b=20;
var s=a+b;    
console.log("First number=",a);
console.log("Second number=",b);
s=addition();
console.log("Sum is ",s);



    

