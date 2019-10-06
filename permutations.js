function getPermutations(array) {
    let perms = [];
    permHelper(0, array, perms);
    return perms;
}

function permHelper(i, arr, perms) {
    if (i === arr.length - 1) {
        perms.push(arr.slice());
    } else {
        for (let j = i; j < arr.length; j++) {
            swap(i, j, arr);
            permHelper(i + 1, arr, perms);
            swap(i, j, arr);
        }
    }
}

function swap(left, right, arr) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}


// console.log(getPermutations([1, 2, 3, 4]));
console.log(getPermutations([1, 2, 3])); //0 perms so [[]]
console.log(getPermutations(['A', 'B', 'C'])); //0 perms so [[]]


