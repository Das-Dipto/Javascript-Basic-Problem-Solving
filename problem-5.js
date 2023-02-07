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