/* ------------

Solution of problem no- 1

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


