function balancedBrackets(string) {
  // Write your code here.
	let brackets = {
		'{' : '}',
		'[' : "]",
		'(' : ')'
	}
	let closing = '}])'
	
	let stack = []
	for (const str of string){
		if (brackets[str] !== undefined){
			stack.push(str)
		} else if (closing.includes(str)){
			let currBracket = stack.pop()
			if (brackets[currBracket] !== str){
				return false
			}
		}
	}
	return stack.length === 0
}

