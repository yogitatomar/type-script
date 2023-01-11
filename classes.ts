

// class User{
//     constructor(name:string,age:number){
//       console.log(name+" "+ age);
      
//     }
// }

// var info= new User("yogita",89)

// modifiers 
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, 
// which is covered in the inheritance section below
class User {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new User("anmol");
  
  console.log(person.getName());

//   Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.