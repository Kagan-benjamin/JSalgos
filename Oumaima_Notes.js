
/* Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available. 
To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as tuples↴ of integers (start_time, end_time). These integers represent the number of 30-minute blocks past 9:00am. 

For example: 
(2, 3) # meeting from 10:00 – 10:30 am (6, 9) # meeting from 12:00 – 1:30 pm 


Write a function merge_ranges() that takes a list of meeting time ranges and returns a list of condensed ranges. 
For example, given: 
  [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
your function would return: 
  [(0, 1), (3, 8), (9, 12)]

Do not assume the meetings are in order. The meeting times are coming from multiple teams. 
Write a solution that's ecient even when we can't put a nice upper bound on the numbers representing our time ranges. Here we've simplied our times down to the number of 30-minute slots past 9:00 am. But we want the function to work even for very large numbers, like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where start_time and end_time don't have an upper bound.

[(1,3), (2,4)]

[(1, 3), (5, 6), (2, 4)]

[(1,5), (2,3)]
[(1,2), (2,3)]

Suppose we could access yesterday's stock prices as a list, where: 
- The indices are the time in minutes past trade opening time, which was 9:30am local time.
- The values are the price in dollars of Apple stock at that time. 

So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

Write an efcient function that takes stock_prices_yesterday and returns the best Profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday. 

For example: 
stock_prices_yesterday = [10, 7, 5, 8, 11, 9] 
  get_max_profit(stock_prices_yesterday)
  # returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).
pramp

/////////////////////////////////////////////////////////////////////

let ranges = [      // Correct:[ [0,1],[3,8],[9,12] ]
  [0, 1],
  [3, 5],
  [4, 8],
  [10, 12],
  [9, 10]
];

let testRanges = [
  [9, 12],
  [1, 4],
  [0, 3],
  [11, 12],
  [3, 9],
  [3, 4],
  [3, 11],
  [2, 5]
]

// [ [0,3] [1,4] [2,5] [3,9] [3,4] [3,11] [9,12] [11, 12]]
// [ [0,1] [3,5] [4,8] [9,10] [10,12] ]

function mergeRanges(arr){
  arr.sort((a, b) => { return a[0] - b[0] });
  let result = [];
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i+1][0] <= arr[i][1] && arr[i+1][1] > arr[i][1]){
      let temp = [arr[i][0], arr[i+1][1]];
      result.push(temp);
      if(i < arr.length - 2) i++;
    } else {
      let temp = [arr[i][0], arr[i][1]];
      result.push(temp);
    }
  };
  return result;
}

mergeRanges(ranges);

*/

/* [ [0,1], [3,5], [4,8], [10,12], [9,10] ] 
//=> [ [0,1], [3,8], [9,12] ] */

// Sort all incoming meetings by start_idx for adjacent comparisons
// [ [0,1], [3,5], [4,8], [9,10], [10,12] ]
// Loop over each meeting:
//  -If i = arr.length - 1, results.push(arr[i])
//  -If arr[i+1][0] > arr[i][1] push arr[i] into results, continue
//  -If arr[i+1][0] <= arr[i][1] && arr[i][1] < arr[i+1][1]:
//    -set arr[i+1] to [arr[i][0], Math.max(arr[i][1], arr[i+1][1])]
//  -If arr[i+1][0] <= arr[i][1] && arr[i][1] >= arr[i+1][1]:
//    -set arr[i+1] = arr[i]
// Return result

//=> Arr: [[0,1],[3,5],[3,8],[9,10],[10,12]]
//=> Res:[[0,1],[3,8]]

//=> arr: [[0,1],[3,5],[3,8],[9,10],[9,12]]
//-> res: [[0,1],[3,8],[9,12]]

/* [(1,3), (2,4)] //=> [[1,4]]
[(1, 3), (5, 6), (2, 4)] //=> [[1,4],[5,6]]
[(1,5), (2,3)] //=> [[1,5]]
[(1,2), (2,3)] //=> [[1,3]]
*/

let test = [ [0,1], [3,5], [4,8], [10,12], [9,10] ]; 
let test1 = [ [1,3], [2,4] ];
let test2 = [ [1,3], [5,6], [2,4] ];
let test3 = [ [1,5], [2,3] ];
let test4 = [ [1,2], [2,3] ];
let test5= [ [1,10], [2,6], [3,5], [7,9] ]

const merge_ranges = arr => {
  arr.sort((a,b) => a[0] - b[0]);
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(i == arr.length - 1){
       result.push(arr[i]);
       break;
    }
    if(arr[i+1][0] > arr[i][1]){
      result.push(arr[i]);
    } else if(arr[i+1][0] <= arr[i][1] && arr[i][1] < arr[i+1][1]){
      let temp = [arr[i][0], Math.max(arr[i][1],arr[i+1][1])];
      arr[i+1] = temp;
    } else if(arr[i+1][0] <= arr[i][1] && arr[i][1] >= arr[i+1][1]){
      arr[i+1] = arr[i];
    }
  }
  result.forEach(el => {
    console.log(el[0],el[1]);
  })
}

merge_ranges(test);