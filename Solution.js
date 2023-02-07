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

console.log(mindGame(5));
console.log(mindGame(30));
console.log(mindGame(33));




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

console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));



/* ------------

Solution of PROBLEM-4

Description: Below is the function called findingBadData, that contains a single parameter. A array is passed
as argument while invoking the function and sets as the value of parameter. Array contains few numbers, includes
both positive and negative. Negative numbers are considered bad data and pushed into  bad_data array. Finally the
function returns the amount of negative number exist in the array.

---------------*/

function findingBadData(findingBadData_number){
    if(Array.isArray(findingBadData_number) === true){
        let bad_data = [];
        let good_data = [];
        let bad_data_length = 0;
    
        for(let i = 0; i < findingBadData_number.length; i++){
            if(typeof findingBadData_number[i] === 'number'){
                if(findingBadData_number[i] < 0){
                    bad_data.push(findingBadData_number[i]);
                }
            
                else if (findingBadData_number[i] >= 0){
                    good_data.push(findingBadData_number[i]);
                }
            }

            else{
                return 'ERROR! Please insert only number in array';
            }
        }
    
        bad_data_length = Number(bad_data.length);
        return bad_data_length;
    }

    else{
        return 'ERROR! Please provide a valid array that contains few number';
    }
}

console.log(findingBadData([1,2,5]));
console.log(findingBadData([2,-5,-7,-13]));
console.log(findingBadData([-4,-9,-5,-33]));




/* ------------

Solution of PROBLEM-5

Description: Below is the function called gemsToDiamond, that contains a three parameter. Three numbers are passed
as argument while invoking the function and sets as the value of parameters. First, second, third parameters are 
multiplied with 21, 32, 43 respectively in order to determine the amount of total_diamond. FInally the function 
returns amount of total_diamond based on its amount greater or less than 2000.

---------------*/

function gemsToDiamond(first_friend_gems, second_friend_gems, third_friend_gems){
    if(typeof first_friend_gems === 'number' && typeof second_friend_gems === 'number' 
         && typeof third_friend_gems === 'number'){
             let first_friend_diamond = first_friend_gems * 21;
             let second_friend_diamond = second_friend_gems * 32;
             let third_friend_diamond = third_friend_gems * 43;
             let total_diamond = first_friend_diamond + second_friend_diamond + third_friend_diamond;
         
             if (total_diamond > 2000){
                 total_diamond = Number(total_diamond - 2000);
                 return total_diamond;
             }
         
             else{
                 return Number(total_diamond);
             }
         }

    else{
        return 'ERROR! Please provide three valid number';
    }
}

console.log(gemsToDiamond(1,1,1));
console.log(gemsToDiamond(20,200,50));
console.log(gemsToDiamond(100,5,1));
