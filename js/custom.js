  
// I write custom JS
// I want to write a piece of JS code that knows what to do when the button is clicked...Add an evenlistener
document.getElementById("btnDemo").addEventListener("click", function(){
    //Step 1: I want to collect the number the user entered
    // Declare a local variable named num1
    // Then set it equal to whatever the user typed
    let num1 = document.getElementById("input1").value;

    //Step 2: I want to collect the word the user entered
    let word1 = document.getElementById("input2").value;

    //Step 3: I want to print out to the user the number and the word they entered
    //Use JS to find the output element and then stuff some data into it
    document.getElementById("output1").innerHTML = `The number you entered is <span class="boldy">${num1}</span>`;
    document.getElementById("output2").innerHTML = `The word you entered is <span class="boldy">${word1}</span>`;
});


// How to I wire up an event handler for the click event of the btnDemo2 button
document.getElementById("btnDemo2").addEventListener("click", function(){    
    for(let loop = 1; loop <= 100; loop++)
    {  
        var specialValue = loop % 2;
               
        if(specialValue != 0) //if SpecialValue IS NOT 0
        {
            var printableNum = `<b>${loop}</b> `;
        }
        else 
        {
            var printableNum = `${loop} `;
        }

        document.getElementById("output3").innerHTML += printableNum;
    }
});

document.getElementById("btnWord").addEventListener("click", function(){
    //Loop over each of the letters in the word
    let word = document.getElementById("input3").value; 
    let newWord = "";
    for(let loop = 0; loop < word.length; loop++)
    {
        //How can I use the loop variable to get a single letter from word
        newWord += `${word.substr(loop, 1)}-`;        
    }
    document.getElementById("output4").append(newWord);
    document.getElementById("output5").append(newWord.substr(0, newWord.length-1));
}); 

document.getElementById("btnClear").addEventListener("click", function(){
    // Clear the word the user entered
    document.getElementById("input3").value = "";  
    document.getElementById('output4').innerText = "";
    document.getElementById('output5').innerText = "";
});


// Version 1
 
// function palindrome(str) {
//     var reg = /[\W_]/g;

//     var smallStr = str.toLowerCase().replace(reg,"");

//     console.log(smallStr)

//     let reversed = smallStr.split("").reverse().join("");
//     if (reversed === smallStr) return true;

//        return false;
// }

//  palindrome("racecars9") 


//  Version 2


/*
const str = 'anna';

const isPalindrome = (inStr) => {
    inStr = inStr.replace(/\W/g, '');
    inStr = inStr.toLowerCase();
    console.log(inStr); 
    for (let i=o; i<inStr.length; i+=1) {
        if (inStr[i] !== inStr[inStr.length - 1 -i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(str));

*/

// Version 3

/*
const isPalindrome = (inStr) => {
    inStr = inStr.replace(/\W/g, '');
    inStr = inStr.toLowerCase();
    
    return inStr === inStr.split('').reverse().join('');
}


console.log(isPalindrome(str));

*/

isPalindrome = (str) => {
    /*for(let i = 0; i<str.length; i++ ){
        console.log(str.substring(i, i+1));
        console.log(str.substring(str.length - i -1, str.length - i));
        if(str.substring(i, i+1) !==str.substring(str.length - i -1.str.length - i)){
            return false;
        }
    }
    return true;
    */

   /* for(let i = 0; i<str.length; i++ ){
        console.log(str[i]);
        console.log(str[str.length - i -1]);
        if( str[i] !==str[str.length- i -1]){
            return false;
        }
    }
    return true;
*/

console.log(str.split('').reverse().join(''));
return str === str.split('').reverse().join('');

    
}

console.log(isPalindrome(""));
