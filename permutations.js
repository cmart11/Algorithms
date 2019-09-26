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
            // console.log('1', arr);
            swap(i, j, arr);
            // console.log('2', arr);
            permHelper(i + 1, arr, perms);
            // console.log('3', arr);
            swap(i, j, arr);
            // console.log('4', arr);

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

