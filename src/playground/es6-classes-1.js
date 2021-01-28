
class Person {

    // constructor(name){
    //     //console.log(name);
    //     this.name = name || "Anonymous";
    // }

    constructor(age = 0, name = "Anonymous"){
        //console.log(name);
        this.name = name;
        this.age = age;
    }

    // getGreeting(){
    //     return "Hi " + this.name + "!!";
    // }

    getGreeting(){
        return `Hi. I am ${this.name}!!`
    }

    getDescription(){
       return this.age > 25 ? `hi ${this.name}` : `hello ${this.name}`
    }

}

class Student extends Person{

    constructor(name, age, major = 'undecided'){
        super(name, age);
        this.major = major
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
       // return 'testing';
       let desc = super.getDescription();

       if(this.hasMajor()){
        desc += ` Their major is ${this.major}`;
       }
       return desc;
    }
}


const me = new Student(30, "Amrit Singh", "Comp Science");
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const person1 = new Student();
console.log(person1);//undefined or default value
console.log(person1.getDescription());
console.log("person1.hasMajor() = ", person1.hasMajor());

// const me = new Person(30, "Amrit Singh");
// console.log(me);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const person1 = new Person();
// console.log(person1);//undefined or default value
// console.log(person1.getDescription());


//Traveller -> Person
//Add support for home location
//override get greeting

class Traveller extends Person {

    constructor(name, age, homeLocation){
        super(age, name);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}

const meTraveller = new Traveller("Amrit", 30, "Sarangarh");
console.log(meTraveller);
console.log(meTraveller.getGreeting());

const otherTraveller = new Traveller(undefined, undefined, "Nowhere");
console.log(otherTraveller);
console.log(otherTraveller.getGreeting());