// splice method example

let colours = ["red", "green", "blue", "yellow", "purple"];
colours.splice(1,0,"orange");
console.log(colours); // Output: ["red", "orange", "green", "blue", "yellow", "purple"]

// The splice method is used to add "orange" at index 1 without removing any elements.

The first argument (1) is the index at which to start changing the array.
The second argument (0) indicates that no elements should be removed.
The third argument ("orange") is the element to be added at that index.
The resulting array is logged to the console, showing the updated order of elements.

// // // The splice method modifies the original array in place and returns an array containing the removed elements, if any.

let colors = ["red", "green", "blue", "yellow", "purple"];
colours.splice(); // No arguments
console.log(colors); // Output: ["red", "green", "blue", "yellow", "purple"]
// // // The splice method is called without any arguments, so it does not modify the array.

// // Can we use splice() to insert an element without removing anything?

let animals = ["cat", "dog", "fish"];
animals.splice(1,0,"bird");
console.log(animals); // Output: ["cat", "bird", "dog", "fish"]
// Yes, we can use splice() to insert an element without removing anything.

// What happens if the deleteCount exceeds the number of remaining elements?

let data = ["1", "2", "3", "4"];
data.splice(1,10);
console.log(data); // Output: ["1"]

// Only 1 is left because 2 and 3 got removed.
// The splice method removes elements starting from index 1 up to the specified deleteCount (10 in this case).
// Since there are only 3 elements after index 1, it removes all of them,

