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

var shuffle = function(nums, n) {
    let result = [nums[0]];
    let yStart = n;
    let temp;
    for(let i = 1; i <= n; i++){
        if(i < n){
            result.push(nums[yStart]);
            yStart++;
            result.push(nums[i]);
        } else {
            result.push(nums[yStart]);
        }
    }
    return result;
};

var defangIPaddr = function(address) {
    let str = '';
    for(let char in address){
        if(address[char] != '.'){
            str += address[char];
        } else {
            str += '[.]';
        }
    }
    return str;
};