function checkPrime(n){
    var c=0;
    for(var i=1;i<=n;i++){
        if(n%i==0){
            c++;
        }
    }
    if(c==2){
        console.log("The number is prime");
    }
    else{
        console.log("The number is composite.");
    }
}

module.exports={checkPrime}