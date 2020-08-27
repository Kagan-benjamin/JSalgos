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


// Vector Class 

class Vec {
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  
    plus(vector){
      let newX = this.x + vector.x;
      let newY = this.y + vector.y;
      let newVec = new Vec(newX, newY);
      return newVec;
    }
  
    minus(vector){
      let newX = this.x - vector.x;
      let newY = this.y - vector.y;
      let newVec = new Vec(newX, newY);
      return newVec;
    }
  
    get length(){
      return Math.sqrt(((this.x * this.x) + (this.y * this.y)))
    }
  }

  class Group {
    constructor(){
      this.group = [];
    }
    
    has(val){
     for(let i = 0; i < this.group.length; i++){
      if(this.group[i] == val){
        return [true, i];
      } 
     }
     return false;
    }
    
    add(val){
        if(this.has(val)) return 'already in group'
      this.group.push(val)
    }
    
    delete(val){
         if(this.has(val)){
        let newGroup = this.group.filter(el => el != val);
        this.group = newGroup;
        return this;
      }
      return false;
    }
  
    static from(obj){
     let newGroup = new Group();
     for(let key in obj){
         if(newGroup.group.includes(obj[key])) continue;
      newGroup.group.push(obj[key]);
     }
     return newGroup;
    }
   
  }
  
  let test = {
    a: 1,
    b: 2,
    c: 3, 
    d: 9,
    e: 'a',
    f: 'test',
    g: 4
  };