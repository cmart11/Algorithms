/* 
TIME: O(n) linear time. while loop iterates through entire loop in worst case.

SPACE: O(1) constant space. only creating variables which are constant space operations.

*/

const hasSingleCycle = (arr) => {
    let numVisited = 0
    let currIdx = 0
    while (numVisited < arr.length) {
        if (numVisited > 0 && currIdx === 0) return false
        numVisited++
        currIdx = getNextIdx(currIdx, arr)
    }
    return currIdx === 0
}

const getNextIdx = (currIdx, arr) => {
    const jump = arr[currIdx]
    const nextIdx = (jump + currIdx) % arr.length
    return nextIdx >= 0 ? nextIdx : nextIdx + arr.length
}

console.log(hasSingleCycle([2, 3, 1, -4, -4, 2])) //True
console.log(hasSingleCycle([2, 3, 1, -4, -4])) //False

