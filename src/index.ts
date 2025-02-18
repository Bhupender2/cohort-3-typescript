let x: number = 1; // this is how we define type is typescript without explicity defining the type code run karaha h coz typescript ne infere (assume) karliya ki 1 h toh number hi hoga but sometimes compiler is not able to infer a comples type tab u need to give a type expilcity

// int i=1 ; this is how we define type in c++

console.log(x);

function greeting(firstName: string) {
  console.log(`hello ${firstName}`);
}

greeting("anurag");

// make a functiion that calculates the sum of two numver

// make a function which checks the legal age
function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(16));

// create a funtion tht gives the sum if two numbers

function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(1, 2));

// creating a function that take a function as an argument and runs it after 1 second

function takefunction(anotherFn: () => number) {
  setTimeout(() => {
    console.log(anotherFn());
  }, 1000);
}

function Fn() {
  return 2;
}
console.log(takefunction(Fn));

// ()=> void   ---it means it takes zero arguments and it returns nothing . if it retuns 2 we will write  ()=> number

// we are giving lots of information to the typescript compiler ..ye function ko ye return karna chahiye (called the function in a 100 places so whenever it retunr something (different type) the comoiler will complain ) if ever be called with the wrong type please break the code

// u can define an object like this but u cant define the typecript kike this

interface userType {
  firstName: string;
  lastName: string;
  age: number;
}

function greet(user: userType) {
  console.log("hello " + user.firstName);
}

greet({
  firstName: "hero",
  age: 21,
  lastName: "raja",
});
//in type u can do unions and intersection which u cant do in interfcace its one of the major difference between tyoe and intefaces

// type  SumInput = string | number;

// function namee(a:SumInput, b:SumInput){
//   return a+b
// }

// the reason  why typescript is throwing error is because it doesnt know if it needs to concatenate or add , as typescript doesnt do implicit type coersion  ( bcoz its strict about types) thats why it throws error

function legalAge(age: number): boolean {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

interface Userr {
  name: string;
  number: number;
  address: {
    street: string;
    pincode: number;
    city: string;
  };
}

let user={
  name:"harkirat",
  number:930399393,
  address:{
    street:"60 foot road",
    pincode:92992,
    city:"haryana"

  }
}

function userAdress(user:Userr):string{
  return `hello this is my ${user.address.street}`
}

userAdress(user)


// optional paramters are also added ----------- ?  so it makes the property optional and typescript wont complain obviously .....but it can also make the subproperty optional if u want to