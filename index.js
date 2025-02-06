"use strict";
let x = 1; // this is how we define type is typescript without explicity defining the type code run karaha h coz typescript ne infere (assume) karliya ki 1 h toh number hi hoga but sometimes compiler is not able to infer a comples type tab u need to give a type expilcity
// int i=1 ; this is how we define type in c++
console.log(x);
function greeting(firstName) {
    console.log(`hello ${firstName}`);
}
greeting("anurag");
// make a functiion that calculates the sum of two numver
// make a function which checks the legal age
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(16));
// create a funtion tht gives the sum if two numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));
// creating a function that take a function as an argument and runs it after 1 second
function takefunction(anotherFn) {
    setTimeout(() => {
        console.log(anotherFn());
    }, 1000);
}
function Fn() {
    return 2;
}
console.log(takefunction(Fn));
