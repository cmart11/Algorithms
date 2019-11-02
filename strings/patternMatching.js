const pattern1 = 'AABA'
const string1 = 'AABAACAADAABAABA'


/*
    This is a naive pattern/string seaching approach
    
    where m: pattern length
          n: string length
    
    Time: O((m*(n-m+1)))
    
*/

function naivePatternSeach(str, pattern) {
    const patternLength = pattern.length
    const strLength = str.length

    let result = []

    for (let i = 0; i <= strLength - patternLength; i++) {

        let j

        for (j = 0; j < patternLength; j++) {
            if (str.charAt(i + j) !== pattern[j]) {
                break
            }
        }

        if (j === patternLength) {
            result.push(str.slice(i, i + patternLength))
        }
    }
    return result
}

console.log(naivePatternSeach(string1, pattern1));

function patternMatcher(pattern, string) {
	if (pattern.length > string.length){
		return []
	}
	let newPattern = getNewPattern(pattern)
	let didSwitch = newPattern[0] !== pattern[0]
	let counts = { 'x': 0, 'y': 0}
	let firstYPos = getCountAndFirstYPos(newPattern, counts)
	if (counts['y'] !== 0){
		for (let lenOfX = 1; lenOfX < string.length; lenOfX++){
			const lenOfY = (string.length - lenOfX * counts['x']) / counts['y']
			if (lenOfY <= 0 || lenOfY % 1 !== 0) continue
			const yIdx = lenOfX * firstYPos
			const x = string.slice(0, lenOfX),
						y = string.slice(yIdx, yIdx + lenOfY)
			const potentialMatch = newPattern.map(char => (char === "x" ? x : y))
			if (string === potentialMatch.join('')){
				return !didSwitch ? [x, y] : [y, x]
			}
		}
	} else {
		 const lenOfX = string.length / counts['x']
		 if (lenOfX % 1 === 0){
			 const x = string.slice(0, lenOfX)
			 const potentialMatch = newPattern.map(char => char === "x" ? x : y)
			 if (string === potentialMatch.join('')){
				 return !didSwitch ? [x, ""] : ["", x]
			 }
		 }
	}
	return []
}

function getNewPattern(pattern){
	let np = pattern.split('')
	if (pattern[0] === 'x'){
		return np
	} else {
		return np.map(str => str === 'y' ? 'x' : 'y')
	}
}

function getCountAndFirstYPos(pattern, counts){
	let firstYPos = null
	for (let i = 0; i < pattern.length; i++){
		counts[pattern[i]] += 1
		if (pattern[i] === 'y' && firstYPos === null){
			firstYPos = i
		}
	}
	return firstYPos
}
