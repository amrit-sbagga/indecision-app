"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {

    // constructor(name){
    //     //console.log(name);
    //     this.name = name || "Anonymous";
    // }

    function Person() {
        var age = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Anonymous";

        _classCallCheck(this, Person);

        //console.log(name);
        this.name = name;
        this.age = age;
    }

    // getGreeting(){
    //     return "Hi " + this.name + "!!";
    // }

    _createClass(Person, [{
        key: "getGreeting",
        value: function getGreeting() {
            return "Hi. I am " + this.name + "!!";
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            return this.age > 25 ? "hi " + this.name : "hello " + this.name;
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age) {
        var major = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undecided';

        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name, age));

        _this.major = major;
        return _this;
    }

    _createClass(Student, [{
        key: "hasMajor",
        value: function hasMajor() {
            return !!this.major;
        }
    }, {
        key: "getDescription",
        value: function getDescription() {
            // return 'testing';
            var desc = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getDescription", this).call(this);

            if (this.hasMajor()) {
                desc += " Their major is " + this.major;
            }
            return desc;
        }
    }]);

    return Student;
}(Person);

var me = new Student(30, "Amrit Singh", "Comp Science");
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

var person1 = new Student();
console.log(person1); //undefined or default value
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

var Traveller = function (_Person2) {
    _inherits(Traveller, _Person2);

    function Traveller(name, age, homeLocation) {
        _classCallCheck(this, Traveller);

        var _this2 = _possibleConstructorReturn(this, (Traveller.__proto__ || Object.getPrototypeOf(Traveller)).call(this, age, name));

        _this2.homeLocation = homeLocation;
        return _this2;
    }

    _createClass(Traveller, [{
        key: "getGreeting",
        value: function getGreeting() {
            var greeting = _get(Traveller.prototype.__proto__ || Object.getPrototypeOf(Traveller.prototype), "getGreeting", this).call(this);
            if (this.homeLocation) {
                greeting += " I am visiting from " + this.homeLocation;
            }
            return greeting;
        }
    }]);

    return Traveller;
}(Person);

var meTraveller = new Traveller("Amrit", 30, "Sarangarh");
console.log(meTraveller);
console.log(meTraveller.getGreeting());

var otherTraveller = new Traveller(undefined, undefined, "Nowhere");
console.log(otherTraveller);
console.log(otherTraveller.getGreeting());
