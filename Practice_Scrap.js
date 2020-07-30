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