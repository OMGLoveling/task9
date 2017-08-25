module.exports = class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        if (Object.getPrototypeOf(this).hasOwnProperty('next')) {
            this.id = Object.getPrototypeOf(this).next++;
        } else {
            this.id = 0;
            Object.getPrototypeOf(this)['next'] =1;
        }
    }
    introduce() {
        return(`My name is ${this.name}. I am ${this.age} years old.`);
    }
};