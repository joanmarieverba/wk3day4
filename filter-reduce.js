// Rewrite the following `filter()` using `reduce()`:

// Basic filter
[1,2,3,4].filter(function (input) {
    return (input > 2);
}) // => [3,4]

// Filter with reduce
[1,2,3,4].reduce(function (result, input) {
    var = outputArray = [];
    if (result =< 2) {result = 0;} else {array = result;};
    console.log(outputArray);
    return outputArray;
}, []) // => [3,4]

// Filter with reduce
[1,2,3,4].reduce(function (result, input) {
    var = outputArray = [];
    if (result =< 2) {outputArray = input;};
    console.log(outputArray);
    return outputArray;
}, []) // => [3,4]

//Jim's code:

// Filter with reduce
var rayray = [1,2,3,4].reduce(function (result, input) {
    if(input && input > 2) {
      // Copy of the previous result
      var resultCopy = result.slice(0, result.length);
      // Adding a new item to the copy
      resultCopy.push(input);

      // Return the copy
      return resultCopy;
    }
    return result;
  }, []);
console.log(rayray);
//}; // => [3,4]
