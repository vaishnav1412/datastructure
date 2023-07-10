// function binarysearch(array,target){
//  let l=0  
//  let r=array.length-1
//  while(l<=r) {
//    let m=Math.floor((l+r)/2)
//     if(target==array[m]){
//         return m
    
//     }
//     else if(target<array[m]){
//         r=m-1
//     }
//     else{
//         l=m+1
//     }
//  }
//  return -1
// }

// let array =[1,2,3,4,5,6,7,8,9]
// console.log(binarysearch(array,3));


// function binarysearch(array,search){
//    let start = 0
//    let end = (array.length)-1
//    while(start<=end){
//    let  midpoint =Math.floor((start+end)/2) 
//    if (search==array[midpoint]){
//     return midpoint
//    }
//    else if(search<array[midpoint]){
//     end=midpoint-1
//    }
//    else{
//     start=midpoint+1
//    }

//    }
//    return false
// }





// function binary(array,target){
//   let start = 0
//   let end = (array.length)-1
//    while(start<=end){
//      let mid =Math.floor((start+end)/2)
//      if(array[mid]==target){
//       return mid
//      }
//      else if(array[mid]>target){
//       end =mid-1
//      }
//      else{
//       start =mid+1
//      }
//    }
//    return false
// }
// const array = [11,22,33,44,55,66,7,8,9,5,]
// console.log( binary(array,22));



// function linearsearch(array,target){
//    for(let i =0;i<array.length;i++){
//       if(array[i]==target){
//          return i
//       }
//    }
// }
// let array=[1,30,20,4,6,7,9,10]
// console.log(linearsearch(array,20));




function binarysearch(array,target){
   let start = 0;
   let end = (array.length)-1
   while(start<=end){
      let mid = Math.floor((start+end)/2)
      if(array[mid]==target){

         return mid
      }
      else if(array[mid]>target){
         end=mid-1
      }
      else{
         start=mid+1
      }
   }
   return false
}

const array =[1,2,3,4,,55,66,799]
console.log(binarysearch(array,1));