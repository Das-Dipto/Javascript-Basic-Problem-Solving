/* ------------
Answer to the problem no- 2
---------------*/ 

function evenOdd(word){
    let word_length = word.length;
    if(word_length % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

console.log(evenOdd('Phero'));
console.log(evenOdd('Batch7'));
console.log(evenOdd('chatgpt'));