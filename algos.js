// Print Prime numbers
function isPrime(num) {
    if (num === 0 || num === 1) {
        return false
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function display(n) {
    let arr = []
    if (n === 2) {
        arr.push(2)
        return arr
    }

    for (let i = 3; i < n; i++) {
        const currNum = i;
        if (isPrime(currNum)) {
            arr.push(currNum)
        }
    }
    return arr
}
console.log(display(2))


// Truncate a string

function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num > 3 ? num - 3 : num) + '...';
    }
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8))

// Repeat a string N times
function repeatStringNumTimes(str, num) {
    if (num < 0)
        return "";
    if (num === 1)
        return str;
    else
        return str + repeatStringNumTimes(str, num - 1);
}


/* Quick Sort

Quick sort’s worst case is O(n2) but that can be avoided if we pick random pivot point, so that way it’s big O is O(nlogn).
It’s space complexity is O(logn).

*/

//Swapping array elements via ES6 array destructuring 
function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]];
}

//Pivot function returns the fixed pivot point
function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left;
    for (let i = left + 1; i <= right; i++) {

        //Move all the small elements on the left side
        if (arr[i] < arr[left]) swap(arr, i, ++shift);
    }

    //Finally swapping the last element with the left
    swap(arr, left, shift);
    return shift;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);

        //Recusrively calling the function to the left of the pivot and to the right of the pivot
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
}

//   MERGE SORT

/*

Time complexity of Merge Sort is O(nlogn).
Space complexity of Merge Sort is O(n).

*/

//Merger function, which merges 2 sorted array into 1 sorted array
function merger(arr1, arr2) {
    let i = 0, j = 0, mergedArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
        else mergedArr.push(arr1[i++]);
    }
    while (i < arr1.length) {
        mergedArr.push(arr1[i++]);
    }
    while (j < arr2.length) {
        mergedArr.push(arr2[j++]);
    }
    return mergedArr;
}
function mergeSort(array) {
    //Array of length 1 is sorted so we return the same array back
    if (array.length == 1) return array;

    //Break down the array to half from middle into left and right
    let middle = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, middle));
    let right = mergeSort(array.slice(middle));

    //Return the merged sorted array
    return merger(left, right);
}

// LOCK
// https://www.geeksforgeeks.org/minimum-rotations-unlock-circular-lock/    


const search = (arr, num) => {
    //arr.sort((a, b) => a - b); // time and space complexity depends for .sort() depends on JS runtime environment

    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        const possibleMatch = array[middle]
        if (num === possibleMatch) {
            return middle
        } else if (num < possibleMatch) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return false
}

const array = [1, 2, 4, 5, 6, 7, 9, 23, 43, 299]

console.log(search(array, 2))
