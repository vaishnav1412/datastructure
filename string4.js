//  let a= [1,2,3]
//  let ab=a.join('')
//  ab=Number(ab)+1
//  ab=""+ab
ab
//  a=ab.split('')

//  console.log(a)



//  let b = [1,2,3,4,5]
//  let rev =b.reverse().join('')
//  rev = Number(rev)+1
//  rev =""+rev
//  b =rev.split('')
//  console.log(b);






function palliantrome(str){
    const l=str.length
    for(i=0;i<l/2;i++){
        if(str[i]!==str[l-i-1]){
            return false
        }
    }
    return true
}
const str='malayalam'
console.log(palliantrome(str));

/////////////////////////////


let a= ' vaishnav '

let b= a.split('').reverse().join('')
 if(a==b){
    console.log('psl');
 }else{
    console.log('nsl');
 }


 ///////////////////////////



