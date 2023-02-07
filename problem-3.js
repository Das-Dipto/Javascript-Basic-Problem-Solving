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
