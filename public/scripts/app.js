"use strict";

console.log("app js is running");

var app = {
    title: "Indecision App",
    options: ["One", "Two"]
};

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();

    //console.log("form submitted!!")
    var option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = "";
        renderAndShowFormData();
    }
};

//create "Remove All" button list
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderAndShowFormData();
};

var appRoot = document.getElementById("app");

var renderAndShowFormData = function renderAndShowFormData() {
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
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No Option"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.forEach(function (itemElem) {
                console.log(itemElem);
                React.createElement(
                    "li",
                    null,
                    itemElem
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderAndShowFormData();
