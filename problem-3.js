/* ------------
Answer to the problem no- 3
---------------*/

function isLGSeven(num){
    let final_value = 0;
    let difference = num - 7;
    if (difference < 7){
        final_value = Number(difference);
        return final_value;
    }
    else{
        final_value = Number(num * 2);
        return final_value;
    }
}

console.log(isLGSeven(6));
console.log(isLGSeven(-15));
console.log(isLGSeven(15));