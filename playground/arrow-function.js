var square = (x) => x*x;
console.log(square(9)); 

var user = {
    name: 'Caleb', 
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments); 
        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi(1, 2, 3); 

//Always use arrow functions unless you need the keyword "this", or "arguments"