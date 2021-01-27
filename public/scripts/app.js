"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var me = new Person(30, "Amrit Singh");
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());

var person1 = new Person();
console.log(person1); //undefined or default value
console.log(person1.getDescription());
