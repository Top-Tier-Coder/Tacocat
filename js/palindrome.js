// Add EventListener for btnWord

document.getElementById("btnWord").addEventListener("click", function(){
    // Step 1: Get User Data by assigning value to variable word
    let word = document.getElementById("word").value;
    let revWord = "";
    for(let loop = word.length - 1; loop >= 0; loop--){
        let character = word.substr(loop, 1);
        revWord += character
    }
    // Step 2 Write an if statement that compares word to reverse word
    if(word == revWord){
        document.getElementById("outResult").innerText = `${word} Is a Palindrome`

    } 
    else{
        document.getElementById("outResult").innerText = `${word} Is NOT a Palindrome`

    }

    // for(let loop=0; loop < word.length; loop++){

    // }
})
