function palindrome(string) {
    var strLength = string.length
    for (let index = 0; index < strLength/2; index++) {
if(string[index] !==string[strLength-1-index]){
    return false;
    }
}
return true;
    
}
palindrome("abba")
