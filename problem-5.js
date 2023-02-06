/* ------------
Answer to the problem no- 5
---------------*/

let ff_gems_power = 21;
let sf_gems_power = 32;
let tf_gems_power = 43;

function gemsToDiamond(ff_gems, sf_gems, tf_gems){
    let ff_diamond = ff_gems * ff_gems_power;
    let sf_diamond = sf_gems * sf_gems_power;
    let tf_diamond = tf_gems * tf_gems_power;
    let total_diamond = ff_diamond + sf_diamond + tf_diamond;

    if (total_diamond > 2000){
        total_diamond = Number(total_diamond - 2000);
        return total_diamond;
    }

    else{
        return Number(total_diamond);
    }
}

console.log(gemsToDiamond(1,1,1));
console.log(gemsToDiamond(20,200,50));
console.log(gemsToDiamond(100,5,1));