// Use frequency counter technique to check whether 2 incoming numbers have equal
// frequencies of each digit. 

function sameFrequency(a, b){
    let x = a.toString()
    let y = b.toString()
    
    if (x.length !== y.length){
        return false;
    }
    let counterX = {};
    let counterY = {};
    for(let num of x){
        counterX[num] = (counterX[num] || 0) + 1;
    }
     for(let num of y){
        counterY[num] = (counterY[num] || 0) + 1;
    }
    
    for(let key in counterX){
        if(!(key in counterY)){
            return false;
        }
        if(counterY[key] !== counterX[key]){
            return false;
        }
    }
    return true;
  }

// Implement a function called areThereDuplicates which accepts a variable number of
// arguments and checks whether there are any duplicates among the arguments passed
// in. You can solve this using the frequency counter or mult pointers pattern.


  function areThereDuplicates(...args) {            // multiple pointers
    args.sort((a,b) => a > b);
    let idxStart = 0;
    let idxEnd = 1;
    
    while(idxEnd < args.length){
        if(args[idxStart] === args[idxEnd]){
            return true;
        } 
        idxStart++;
        idxEnd++;
    }
    return false;
  }

  function areThereDuplicates() {                   // frequency counter
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }




  function averagePair(arr, n){                        // multiple pointers

    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let avg = (arr[start] + arr[end])/2
        if (avg === n){
            return true;
        } else if(avg < n){
            start++
        } else {
            end--
        }
    }
    return false;
}

function isSubsequence(str1, str2) {                   // multiple pointers
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

  function minSubArrayLen(arr, n){                   // sliding window
    let start = 0;
    let end = 0;
    let total = 0;
    let minLength = Infinity;
    
    while(start < arr.length){
        if(total < n && end < arr.length){
            total += arr[end];
            end++
        } else if (total >= n) {
            let length = end - start
            minLength = Math.min(minLength, length);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    if(minLength == Infinity){ 
        return 0;
    } else {
        return minLength;
    }
}

function findLongestSubstring(str){                      // sliding window
  let start = 0;
  let longest = 0;
  let counter = {};
  
  for(let i = 0; i < str.length; i++){
      let char = str[i] 
      if(counter[char]){
          start = Math.max(start, counter[char])   // sets start of window to value that
      }                                           // corresponds with last duplicate char 
      longest = Math.max(longest, i - start + 1)  // index         
      counter[char] = i + 1 
  }
  return longest;
}
