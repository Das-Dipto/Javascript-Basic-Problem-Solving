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