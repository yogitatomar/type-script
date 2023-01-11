// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello world');
  }


//   Return Type
// The type of the value returned by the function can be explicitly defined.

// Optional Parameters
function addnumber(a:number,b:number,c?:number):number{
    return a+b
}

console.log(addnumber(20,30))