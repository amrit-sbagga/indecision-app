"use strict";

console.log("app js is running");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        "Indecision app"
    ),
    React.createElement(
        "p",
        null,
        "This is JSX from app.js!"
    )
);

var user = {
    name: "Amrit",
    age: 31,
    location: "New York"
    // var name = "Amrit";
    // var age = 31;
    // var userLocation = "New York"

};function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location :- ",
        location
    );
}

var count = 0;
var someId = "myId";

var addOne = function addOne() {
    count += 1;
    console.log("count = ", count);
    renderCounterApp();
};

var minusOne = function minusOne() {
    count -= 1;
    console.log("count = ", count);
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    console.log("count = ", count);
    renderCounterApp();
};

//console.log(templateTwo);

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count : ",
            count
        ),
        React.createElement(
            "button",
            { id: someId, className: "button", onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { id: someId, className: "button", onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { id: someId, className: "button", onClick: reset },
            "Reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
