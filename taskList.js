//You have some tasks in your Asana account. For each ith of them you know its deadlinei - the last day by which it should be completed. As you can see in your calendar, today is the day number day. Asana labels each task in accordance with its due date:

//If the task is due today or it's already overdue, it is labeled as Today;
//If the task should be completed within a week (but not today), i.e. its deadline is somewhere between day + 1 and day + 7 //both inclusive, it is labeled as Upcoming;
//All other tasks are labeled as Later;
//Your goal is to find the number of tasks with each label.

//Example

//For deadline = [1, 2, 3, 4, 5] and day = 2, the output should be
//tasksTypes(deadline, day) = [2, 3, 0];
//For deadline = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8] and day = 1, the output should be
//tasksTypes(deadline, day) = [2, 8, 2].
//Input/Output

//[time limit] 4000ms (js)
//[input] array.integer deadline

//Constraints:
//1 ≤ deadline.length ≤ 15,
//1 ≤ deadline[i] ≤ 15.

//[input] integer day

//Constraints:
//1 ≤ day ≤ 10.

//[output] array.integer

//Array of three elements - the number of tasks labeled as Today, Upcoming and Later, respectively.





//dumb solution:
// function tasksTypes(deadline, day) {
//     var today = 0;
//     var upcoming = 0;
//     var later = 0;
//     var arr = [];
//     for(var i = 0; i < deadline.length; i++) {
//         if (deadline[i] >= day + 1 && deadline[i] <= day + 7 ) {
//             upcoming++
//         }
//         else if (day >= deadline[i] ){
//             today++
//         } else {
//             later++
//         }
//     }
//     arr.push(today);
//     arr.push(upcoming);
//     arr.push(later);
//     console.log(arr)
// }

//refactored
function tasksTypes(deadline, day) {
  var outcome= [0,0,0]
  deadline.reduce(function(prev, curr){
    curr <= day ? outcome[0]++ : (curr >= day + 1 && curr <= day + 7 ? outcome[1]++ : outcome[2]++)
  }, 0)
  return outcome
}

// console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));

var batman = Array(16).join("wat"-1)+ " Batman!"
console.log(batman);
