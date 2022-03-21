function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i ++){
        let madeSwitch = false
        for(let j = 0; j < arr.length - i; j++){
            console.log(arr)

            if(arr[j]  > arr[j+1]){
                madeSwitch = true;
                const temp = arr[j];
                arr[j] = arr[j+1]
                arr[j + 1] = temp
            }
        }
        if(!madeSwitch) break
    }
    return arr
}

module.exports = bubbleSort;