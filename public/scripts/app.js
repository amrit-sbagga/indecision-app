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

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h2",
        null,
        user.name ? user.name.toUpperCase() : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age : ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
