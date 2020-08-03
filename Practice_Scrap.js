function practiceBubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        let swapToggle = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapToggle = false;
            }
        }
        if(swapToggle){
            break;
        }
    }
    return arr;
}

function practiceSelectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

function practiceInsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let curVal = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > curVal){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curVal;
    }
    return arr;
}

function nestedEvenSum (obj) {
    let sum = 0;
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] == 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}