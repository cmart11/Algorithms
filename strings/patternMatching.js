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
