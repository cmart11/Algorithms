function patternEval(pattern, word){
  let num = null
  let patternLength = null
  if (typeof pattern === 'number'){
    patternLength = pattern
  } else {
    num = findNumInString(pattern)
    patternLength = num !== 0 ? num + pattern.length - 1 : pattern.length
  }
  if (patternLength !== word.length){
    return false
  }
  return true
}

function findNumInString(pattern){
  let ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(int => `${int}`)
  let sum = 0
  for (let i = 0; i < pattern.length; i++){
    let char = pattern[i]
    if (ints.includes(char)){
      console.log(Number(char))
      sum += Number(char)
    }
  }
  return sum
}
