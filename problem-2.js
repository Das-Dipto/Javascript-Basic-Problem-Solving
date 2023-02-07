/* ------------

Solution of the PROBLEM-2

Description: Below is the function called evenOdd, that contains a single parameter. A string is passed
as argument while invoking the function and sets as the value of parameter. The function counts total character
consists into string. Finally, the function determines even or odd based on total characters of string. 

---------------*/ 

function evenOdd(word){

    if(typeof word !== 'string'){
        return 'ERROR! Please provide a valid string';
    }

    else{
        let word_length = word.length;
            if(word_length % 2 == 0){
                return 'even';
            }
            else{
                return 'odd';
            }
    }
}

console.log(evenOdd('Phero'));
console.log(evenOdd('Batch7'));
console.log(evenOdd('chatgpt'));
