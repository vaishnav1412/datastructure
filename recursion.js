

function sum(n){
    if(n==1){
        return 1
    }
    else{
        return n+sum(n-1)
    }
}

console.log(sum(2))


function factorial(n){
    if(n==0||n==1){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

console.log(factorial(5));


function fibanacci(n){
    if(n<=1){
        return n
    }
    else{
        return fibanacci(n-1)+fibanacci(n-2)
        
    }
}

console.log(fibanacci(6));