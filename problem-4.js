/* ------------
Answer to the problem no- 4
---------------*/

function findingBadData(num){
    let bad_data = [];
    let good_data = [];
    let bad_data_length = 0;

    for(let i = 0; i < num.length; i++){
        if(num[i] < 0){
            bad_data.push(num[i]);
        }
    
        else if (num[i] >= 0){
            good_data.push(num[i]);
        }
    }

    bad_data_length = Number(bad_data.length);
    return bad_data_length;
}

console.log(findingBadData([1,2,5]));
console.log(findingBadData([2,-5,-7,-13]));
console.log(findingBadData([-4,-9,-5,-33,-55]));