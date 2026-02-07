function checkArmstrong(n){
    var c=0;
    var s=0;
    var m=n;
    while(n!=0){
        c++;
        n= parseInt(n/10);
    }
    n=m;
    while(n!=0){
        for(var i=1; i<=c; i++){
            var d= n%10;
            var p= 1;
            
            for(var j=1; j<=c; j++){
                p = p*d;
            }
            s = s+p;
            n = parseInt(n/10);
           
        }

    }
    if(s==m){
        console.log("The number is armstrong number.")
    }
    else{
        console.log("The number is not armstrong.")
    }
 
}

module.exports={checkArmstrong}