"use strict";

var appRoot = document.getElementById("app");

var visibile = false;

var onToggle = function onToggle() {
    visibile = !visibile;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility"
        ),
        React.createElement(
            "button",
            { onClick: onToggle },
            visibile ? "Hide details" : "Show details"
        ),
        visibile && React.createElement(
            "p",
            null,
            "Here is the details you want to see"
        )
    );

    ReactDOM.render(template, appRoot);
};
render();
