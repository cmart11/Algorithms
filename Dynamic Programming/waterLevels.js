function waterLevels(heights) {
    let maxes = new Array(heights).fill(0);
    let leftMax = 0;

    for (let i = 0; i < heights.length; i++) {
        let height = heights[i]
        maxes[i] = leftMax
        leftMax = Math.max(leftMax, height)
    }

    let rightMax = 0
    for (let i = heights.length - 1; i >= 0; i--) {
        let height = heights[i]
        let minHeight = Math.min(rightMax, maxes[i])
        if (height < minHeight) {
            maxes[i] = minHeight - height
        } else {
            maxes[i] = 0
        }
        rightMax = Math.max(rightMax, height)
    }
    return maxes.reduce((a, b) => a + b, 0)
}

console.log(waterLevels([5, 0, 2, 0])) //2
console.log(waterLevels([5, 0, 2, 0, 2])) //4
