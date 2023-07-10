function selectionSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;


        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }


        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }

    }
}

let arr = [6, 4, -2, -7, 8, 1];
selectionSort(arr);
console.log(arr);