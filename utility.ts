// Partial<Type>
// Constructs a type with all properties of Type set to optional. 
// This utility will return a type that represents all subsets of a given type.

// interface value{
//     name:string,
//     age:number
//     address?: string
// }
// var Myinfo:Partial<value>={
//     name:"yogita",
//     age:20,
//     address:'indore'
// }
// console.log(Myinfo);


// Required<Type>
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

// interface value{
//     name:string,
//     age:number
//     address?: string
// }
// var Myinfo:Required<value>={    // 'address is missing in type '{name:string;age:number;}' but required in type 'Reruired<value>'
//     name:"yogita",
//     age:20,
//     // address:"indore"  
// }
// console.log(Myinfo);


// Record<Keys, Type>

// Constructs an object type whose property keys are Keys and whose property values are Type. 
// This utility can be used to map the properties of a type to another type.
// var fullname:Record<string,string>={
//     firstname:"yogita",
//     lastname:"tomar"
// }
// console.log(fullname);


// Omit<Type, Keys>

// Constructs a type by picking 
// all properties from Type and then removing Keys (string literal or union of string literals).

// interface value{
//     name:string,
//     age:number
//     address: string
// }
// var Myinfo:Omit<value,'age'|'address'>={
//     name:"yogita",
    
// }
// console.log(Myinfo);


// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

// interface value{
//     name:string,
//     age:number
//     address: string
// }
// var Myinfo:Pick<value,'age'|'address'>={
//     age:20,
//     address:"indore"
    
// }
// console.log(Myinfo);


// Exclude<UnionType, ExcludedMembers>
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers
// type value =string|boolean|number
// const myvalue:Exclude<value,number>="hello"
// console.log(myvalue);

// ReturnType<Type>

// Constructs a type consisting of the return type of function Type.
// export{}
// // type add=()=>number
// function add(num1:number):number{
//     return num1
// }
// const myvalue:ReturnType<typeof add>={
//     num1:10
// }
// console.log(myvalue);

