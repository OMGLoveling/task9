const Person = require('./person');

module.exports = class Teacher extends Person{

    constructor(name, age, clazzes) {
        super(name, age);
        this.clazzes = clazzes;
        this.clazzes.forEach(clazz => {
            clazz.teacher = this;
        });
    }

    notifyStudentAppended(student) {
        return `I am ${this.name}. I know ${student.name} has joined Class ${student.clazz.number}.`
    }
    notifyLeaderAssigned(student) {
        return `I am ${this.name}. I know ${student.name} become Leader of  Class ${student.clazz.number}.`
    }

    isTeaching(student) {
        if (this.clazzes[0].student) {
            return true;
        }
        return false;

    }
    introduce() {
        if (this.clazzes.length !== 0) {
            return super.introduce() + ` I am a Teacher. I teach Class ${this.clazzes[0].number},${this.clazzes[1].number}.`;
        }
        return super.introduce() +  ` I am a Teacher. I teach No Class.`;
    }

};