function sum2(array, total) {
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == total) {
                return [array[i], array[j]]
            }
        }
    }
    return array[0]
}

let array = [1, 2, 3, 4, 5, 6]
let total = 10
let result = sum2(array, total)
for (i = 0; i < result.length; i++) {
    console.log(result[i])
}