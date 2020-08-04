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

function stringifyNumbers(obj){
    let newObj = {};
    for(let key in obj){
      if(typeof obj[key] === 'number'){
        newObj[key] = obj[key].toString();
      } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}

// Pure Recursion

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}

// Helper Recursion

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}