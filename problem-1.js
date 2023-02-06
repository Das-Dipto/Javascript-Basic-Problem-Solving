/* ------------
Answer to the problem no- 1
---------------*/ 

function mindGame(num){
    // let multiply_three = parseFloat(num * 3);
    // let add_ten = parseFloat(multiply_three + 10);
    // let divide_two = parseFloat(add_ten / 2);
    // let sub_five = parseFloat(divide_two - 5);
    // let final_result = Number(sub_five);

    let final_result = parseFloat(((((num*3)+10)/2)-5)).toFixed(1);
    final_result = Number(final_result);

    return final_result;
}

console.log(mindGame(5));
console.log(mindGame(50));
console.log(mindGame(33));