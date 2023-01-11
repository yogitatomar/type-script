// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// To define a tuple, specify the type of each element in the array:

// define our tuple
let Tuple: [number, boolean, string,boolean?];

// initialize correctly
Tuple = [5, false, "hii"];
Tuple.push(true)
console.log(Tuple);