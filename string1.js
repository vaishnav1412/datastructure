
let a = "Ashfaq";

let reverse = a.split("").reverse().join("");

console.log(reverse);


////////////

let k = "ashfaq";

console.log(k.toUpperCase());


function revers(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

console.log(revers("ashfaq"));


let d = "joli";

let r = d.split("").reverse().join("");

