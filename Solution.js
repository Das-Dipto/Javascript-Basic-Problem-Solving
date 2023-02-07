/* ------------

Solution of PROBLEM-1

Description: Below is the function called mindGame, that contains a single parameter. A number is passed
as argument while invoking the function and sets as the value of parameter. The function multiply the number 
with 3, add the multiplication result with 10, divide the addition result by 2, substract 5 from division result.
Finally, the function returns final_result.

---------------*/ 

function mindGame(mindGame_number){
    if(typeof mindGame_number === 'number'){
        let multiply_three = parseFloat(mindGame_number * 3);
        let add_ten = parseFloat(multiply_three + 10);
        let divide_two = parseFloat(add_ten / 2);
        let sub_five = parseFloat(divide_two - 5);
        let final_result = Number(sub_five);
        
        return final_result;
    }
    
    else{
        return 'ERROR! Please provide a valid number';
    }
}

// console.log(mindGame(5));
// console.log(mindGame(30));
// console.log(mindGame(33));




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

// console.log(evenOdd('Phero'));
// console.log(evenOdd('Batch7'));
// console.log(evenOdd('chatgpt'));




/* ------------

Solution of PROBLEM-3

Description: Below is the function called isLGSeven, that contains a single parameter. A number is passed
as argument while invoking the function and sets as the value of parameter. The function substract 7 from 
the number. The function returns subtract_value if it is less than 7, otherwise it multiplies 2 with parameter
and returns the result. 

---------------*/

function isLGSeven(isLGSeven_number){
    if(typeof isLGSeven_number === 'number'){
        let final_value = 0;
        let difference = isLGSeven_number - 7;

        if (difference < 7){
            final_value = Number(difference);
            return final_value;
        }
        else{
            final_value = Number(isLGSeven_number * 2);
            return final_value;
        }
    }

    else{
        return 'ERROR! Please provide a valid number';
    }

}

// console.log(isLGSeven(6));
// console.log(isLGSeven(-15));
// console.log(isLGSeven(15));

