var runningSum = function(nums) {
    let curTotal = nums[0]; 
    const newArr = [curTotal];
    for(let i = 1; i < nums.length; i++){
        curTotal = curTotal + nums[i]; 
        newArr.push(curTotal);
    }
    return newArr;
};

var runningSum = function(nums){
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i] + nums[i-1];
    }
    return nums;
}