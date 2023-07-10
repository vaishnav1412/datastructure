let array = [2,1,3,2]

let count = 0
let sum =0

for(let i=0 ; i<array.length ;i++){
    for(let j=i+1;j<array.length ;j++){

        if(array[i]===array[j]){
            count ++
        }
        else if(array[i]>array[i+1]){
            if(array[i+1]<array[i+2]){
                count ++
                
            }
            else{
                count ++
                
            }
        }
        else{
            sum++
        }
    }
}

if(count>1){
    console.log(false);
}else{
    console.log(true);
}