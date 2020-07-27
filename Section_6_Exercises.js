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