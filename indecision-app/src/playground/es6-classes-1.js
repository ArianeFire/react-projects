class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    greet(){
        return "Hi. I am " + this.name + "!";
    }

    greetTheRightWay(){
        // No need for string concatenation, just injecting 'name' here
        return `Hi. I am ${this.name}`;
    }

    describe(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person('BERTHE Seydou', 24);
const other = new Person();
console.log(me.greetTheRightWay());
console.log(other.greet());
console.log(me.describe());
console.log(other.describe());

// Sub-classing
class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    // Overriding Parent class describe() method
    describe(){
        let description = super.describe();
        if(this.hasMajor()){
            description += ` His major is ${this.major}`;
        }

        return description;
    }
}

const diang = new Student("Diang. One", 27);
const salif = new Student("Salif. One", 22, "Driver");

console.log(diang.describe());
console.log(diang.hasMajor());
console.log(salif.describe());

// Challenge: Traveler Subclass
class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    greet(){
        let greetMessage = super.greet();
        if(this.hasHomeLocation()){
            greetMessage += ` I am visiting from ${this.homeLocation}`;
        }
        return greetMessage;
    }
}

const peulh = new Traveler('BERTHE Seydou', 24, 'Bamako');
console.log(peulh.greet());
