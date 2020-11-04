class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }

    getGreeting() {
        return `Hi. I am ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name)
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
}

const me = new Person('Brian norlander');
console.log(me.getGreeting());

const other = new Student();
console.log(other.hasMajor());