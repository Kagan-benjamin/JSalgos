// Problem Solving //

// 1. Understand the problem
// - Can I restate the problem in my own words?
// - What are the inputs that go into the problem?
// - What are the expected solution outputs?
// - Can the outputs be determined from the inputs? (sometimes this isn't easy to see)
// - How should I label the important pieces of data that are part of a problem?

// Write a function which takes two numbers and returns their sum

function sum(x, y){
    return x + y;
} 


// 2. Explore concrete examples
// - Come up with concrete examples that help to understand the basic problem
// - Examples provide sanity checks that the eventual solution works
// - User stories / Unit tests
// - Start with SIMPLE examples (input + output)
// - Progress to more complex examples
// - Explore examples with empty inputs
// - Explore examples with invalid inputs

// Write a function which takes in a string and returns counts of each character within

// charCount('aaaa') // {a: 4}
// charCount('hello') // {h: 1, e: 1, l: 2, o: 1}


// 3. Break it down
// - Explicitly write out the steps that you need to take
// - This forces you to think about your code before writing + catch lingering issues

function charCountPlan(str){
    // build object to return answer
    // loop over string for each char...
    // - look at each letter, lowercase it, 
    // - if no letter, add key + 1 value
    // - if letter already exists, increment
    // - if char isn't alphanumeric, do nothing
    // return object
}


// 4. Solve / simplify
// - solve the problem if you can. if not, solve a simpler version.
// - find the core difficulty in what you're trying to do
// - temporarily ignore that difficulty 
// - write a simplified solution
// - reincorporate the difficulty back into the problem 

function charCountFirstAttempt(str){
    let returnObj = {};
    for (let i = 0; i < str.length; i++){
        const char = str[i].toLowerCase()
        if (returnObj[char] > 0){
            returnObj[char]++;
        } else {
            returnObj[char] = 1;
        }
    }
    return returnObj;
}


// 5. Look back and refactor
// - Can you check the result?
// - Can you derive the result differently?
// - Can you understand your code at a glance?
// - Can you use the result or method for some other problem?
// - Can you improve the performance of your solution?
// - Can you think of other ways to refactor?
// - How have other people solved this problem?

function charCountFinal(str){
    let returnObj = {};
    for (let i = 0; i < str.length; i++){
        const char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (returnObj[char] > 0){
                returnObj[char]++;
            } else {
                returnObj[char] = 1;
            }
        }
    }
    return returnObj;
}

function charCountRefactor1(str){
    let returnObj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
            returnObj[char] = ++returnObj[char] || 1;
        }
    }
    return returnObj;
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && 
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)){
            return false;
    }
    return true;
}

function charCountRefactor2(str){
    let returnObj = {};
    for (let char of str) {
        if (isAlphaNumeric(char)){
            char = char.toLowerCase();          
            returnObj[char] = ++returnObj[char] || 1;      
        }
    }
    return returnObj;
}
