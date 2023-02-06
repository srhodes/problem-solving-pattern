// add whatever parameters you deem necessary
function averagePair(arr, target) {
    // arr = [-1, 0, 3, 4, 5, 6]
    let result = 0
    let booleanResult = false

    for(let subArr of arr){
        result += subArr
    }
    result = result/arr.length
    console.log("The value of result is ", result)
    if( result < Math.ceil(result) && result > Math.floor(result)){
        result = Math.floor(result)
    }
    console.log("The value of the floored result is ", result)
    console.log("The value of the floored target ", Math.floor(target))
    
    if(result == target)
        return console.log("comparing result and target ", !booleanResult)
    
    return booleanResult
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
