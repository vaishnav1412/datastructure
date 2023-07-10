function odd(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            console.log(array[i]);
        }
    }


}

let array = [1, 2, 4, 5, 6]
let result = odd(array)
