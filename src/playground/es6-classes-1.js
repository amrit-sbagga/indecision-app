
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

const me = new Person(30, "Amrit Singh");
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

const person1 = new Person();
console.log(person1);//undefined or default value
console.log(person1.getDescription());