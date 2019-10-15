function threeNumberSum(array, targetSum) {
	array.sort((a, b) => a - b)
	let result = []
	for (let i = 0; i < array.length; i++){
		let curr = array[i]
		let left = i + 1
		let right = array.length - 1
		while(left < right){
			let currSum = array[left] + array[right] + curr
			if (currSum === targetSum){
				result.push([curr, array[left], array[right]])
				left++
				right--
			} else if (currSum < targetSum){
				left++
			} else if (currSum > targetSum) {
				right--
			}
		}
	}
	return result
}

