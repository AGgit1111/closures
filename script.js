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
/* The essence of a closure is that it preserves the state of its outer scope. Each call to 'counter()'
   does not reset 'count' to 0. Instead, 'count' retains its value between calls, thanks to the closure. 
   This is why you see an increasing number each time 'counter()' is called. */
function makeCounter() {
    let count = 0;
    return function () {
        return (count++);
    };
}

let counter = makeCounter();
console.log('counter: ');
console.log(counter());
console.log(counter());

// Module Pattern Example:
const calculatorModule = (function () {
    let privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(5);
        },
        decrement: function () {
            changeBy(-5);
        },
        value: function () {
            return privateCounter;
        }
    };
})();

console.log('calculatorModule: ');
console.log(calculatorModule.value()); // 0
calculatorModule.increment();
calculatorModule.increment();
console.log(calculatorModule.value()); // 10
calculatorModule.decrement();
console.log(calculatorModule.value()); // 5
