"use strict";

var zak = "Zak Ruvalcaba";
var sally = "Sally Smith";
var holly = "Holly Unlikely";
var amol = "Amol Shookup";

var element = React.createElement(
    "ul",
    { style: { color: "blue", fontSize: "24px" } },
    React.createElement(
        "li",
        null,
        zak
    ),
    React.createElement(
        "li",
        null,
        sally
    ),
    React.createElement(
        "li",
        null,
        holly
    ),
    React.createElement(
        "li",
        null,
        amol.toUpperCase()
    )
);

ReactDOM.render(element, document.getElementById("content"));