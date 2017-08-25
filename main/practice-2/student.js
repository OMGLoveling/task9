const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.id === this.klass.leader) {
            return `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`;
        }
        return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
    }
};