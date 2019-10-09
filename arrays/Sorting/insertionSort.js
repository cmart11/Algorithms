function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i
        while (array[j] < array[j - 1] && j > 0) {
            swap(j, j - 1, array)
            j -= 1
            console.log(array)
        }
    }
    return array
}

function swap(left, right, array) {
    let temp = array[left]
    array[left] = array[right]
    array[right] = temp
}

console.log(insertionSort([9, 3, 1, 0]));
