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

var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    let maxCandy = 0;
    for(let i = 0; i < candies.length; i++){
        if(candies[i] > maxCandy) maxCandy = candies[i];
    }
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= maxCandy){
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    return ans;
};