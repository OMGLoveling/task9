module.exports = class Class {

    constructor(number) {
        this.number = number;
        this.teacher = '';
        this.member = [];
    }

    appendMember(student) {
        this.student = student;
        if (this.teacher) {
            this.teacher.notifyStudentAppended(student);
        }
        this.member.push(student.id);
    }

    assignLeader(student) {
        this.leader = student.name;
        if (this.member.includes(student.id)) {
            if (this.teacher) {
                this.teacher.notifyLeaderAssigned(student);
            }
            return "Assign team leader successfully.";

        }
        return "It is not one of us.";
    }
};