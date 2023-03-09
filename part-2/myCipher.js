const encipher = str => {
    let plainText = 'abcdefghijklmnopqrstuvwxyz'
    let cipherKey = 'mlkjihgfedcbazyxwvutsrqpon'
    str = [...str]
    console.log(str)
    for (let i = 0; i < str.length; i++) {
        if (/[a-z]/.test(str[i])) {
            let idx = plainText.indexOf(str[i]);
            str.splice(i, 1, cipherKey[idx]);
        } else if (/[A-Z]/.test(str[i])){
            let idx = plainText.indexOf(str[i].toLowerCase());
            str.splice(i, 1, cipherKey[idx].toUpperCase());
        }
    }
    return str.join('')
}
   


console.log(encipher('I love cryptography!'))

console.log(encipher(encipher('I love cryptography!')))
