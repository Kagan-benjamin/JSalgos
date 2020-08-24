// Higher Order Functions

let test = [[1,2,3], [4,5], [6]];

function arrayConcat(arr){
    const reducer = (acc, curVal) => acc.concat(curVal);
    console.log(arr.reduce(reducer))
}

function loop(val, test, update, body){
    if(!test(val)) return;
    body(val);
    let newVal = update(val);
    loop(newVal, test, update, body);
}
loop(10, n => n > 0, n => n - 1, console.log)

function every(array, test){
    let toggle = true;
    let i = 0;
    while(toggle != false && i < array.length){
      let ans = test(array[i]);
      if(ans == false) toggle = false;
      i++;  
    }
    return toggle;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([], n => n < 10));

