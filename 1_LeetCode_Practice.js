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

/* SQL Query: 
SELECT id, name FROM students 
WHERE department_id NOT IN (SELECT id FROM departments)

SELECT patient_id, patient_name, conditions FROM patients 
WHERE conditions LIKE '%DIAB1%'

SELECT employee_id, COUNT(*) OVER(PARTITION BY team_id)
AS team_size FROM employee

SELECT e.name, eu.unique_id FROM employees
e LEFT JOIN employeeuni eu ON eu.id = e.id

SELECT sell_date, COUNT(DISTINCT product) AS num_sold,
GROUP_CONCAT(DISTINCT product ORDER BY product) as products
FROM activities
GROUP BY 1

*/

var numIdenticalPairs = function(nums) {
    let pairCount = 0;
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] == nums[j]) pairCount++;
        }
    }
    return pairCount;
};

var numJewelsInStones = function(J, S) {
    let jewelArr = [];
    let count = 0;
    for(let char in J){
        jewelArr.push(J[char]);
    }
    for(let char in S){
        if(jewelArr.includes(S[char])){
            count++;
        }
    }
    return count;
};

var numberOfSteps  = function(num) {
    let steps = 0;
    while(num != 0){
        if(num % 2 === 0){
            num = num / 2;
            steps++;
        } else {
            num = num - 1;
            steps++
        }
    }
    return steps;
};

var smallerNumbersThanCurrent = function(nums) {
    let ans = [];
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i === j && i != nums.length - 1){
                continue;
            } else if(nums[j] < nums[i]){
                count++;
            }
            if(j == nums.length - 1){
                ans.push(count);
                count = 0;
            }
        }
    }
    return ans;
};

var rangeSumBST = function(root, L, R) {
    let result = [];
    let current = root;
    function traverse(node){
        if(node.val >= L && node.val <= R) result.push(node.val)
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(current)
    return result.reduce((a,b) => a + b);

};