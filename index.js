function verifyPalindrome (inputString){
    const oldString = inputString.slice().split('').join('')
    const newStringReverse = inputString.split('').reverse('').join('')

    if (oldString === newStringReverse){
        return (true)
    }else {
        return (false)
    }
}
verifyPalindrome("Ana")