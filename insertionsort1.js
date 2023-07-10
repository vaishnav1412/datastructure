function insertionsort(arr){
for(let i =1;i<arr.length;i++){
   let current =arr[i]
let j =i-1
while(j>=0&&arr[j]>current){
arr[j+1] = arr[j]
j--
}
arr[j+1]=current
}
}

let arr = [-7,-88,88,20,47,85,2,4,6,1]
insertionsort(arr)
console.log(arr);



