/* A closure is a function that captures the environment in which it was declared.
   This environment includes any local variables that were in-scope at the time the
   closure was created.
   
   In simpler terms: a closure gives you access to an outer function's scope from an inner function. 
   
   How Closures Work:
   In JavaScript, when you create a function inside another function, you have created a closure.
   The inner function is the closure, and it can access variables defined in its outer function. 
   
   This behavior is often used to create private variables and functions. */

// In this example, 'innerFunction' is a closure that is accessing 'outerVariable', a variable in its
// outer scope.
function outerFunction() {
    let outerVariable = 100;

    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction;
}

const myFunction = outerFunction();
console.log('myFunction: ');
myFunction();

// Another example:
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}

let counter = makeCounter();
console.log('counter: ');
console.log(counter());
console.log(counter());