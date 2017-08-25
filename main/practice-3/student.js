const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, clazz) {
        super(name, age);
        this.clazz = clazz;
    }
    introduce() {
        if (this.clazz.student === undefined && this.clazz.leader === undefined) {
            return super.introduce()+ " I am a Student. I haven't been allowed to join Class.";
        }
        if (this.clazz.student && this.clazz.leader ) {
            return super.introduce() + ` I am a Student. I am Leader of Class ${this.clazz.number}.`
        }
        return super.introduce() + ` I am a Student. I am at Class ${this.clazz.number}.`
    }
};