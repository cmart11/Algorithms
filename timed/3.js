const blindMice = (str) => {
    str.split('');
    let result = 0;
    let cheeseLocation = str.indexOf('C');
    for (let i = 0; i < str.length; i++) {
        if (i < cheeseLocation) {
            if (str[i] === 'M' && str[i + 1] === '~' && str[i + 2] !== 'M') {
                result++;
            }
        } else if (i > cheeseLocation) {
            if (str[i] === 'M' && str[i - 1] === '~' && str[i - 2] !== 'M') {
                result++;
            }
        }
    }
    return result;
}

let test1 = "M~~M ~MM~C~MM~M~"
console.log(blindMice(test1));