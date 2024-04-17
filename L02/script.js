"use strict";
var EventInspector;
(function (EventInspector) {
    console.log("Let's get started");
    window.addEventListener('load', handleLoad);
    let span = document.createElement("span");
    span.innerHTML = "span";
    span.className = "span";
    function handleLoad(_event) {
        let div0 = (document.querySelector("#div0"));
        let div1 = (document.querySelector("#div1"));
        div0.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        let body = document.querySelector("body");
        let button = (document.querySelector("button"));
        button.addEventListener("click", customEvent);
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let x = _event.pageX;
        let y = _event.pageY;
        let span = document.querySelector("span");
        span.style.left = x + 10 + "px";
        span.style.top = y + 10 + "px";
        span.innerHTML = "x: " + x + "<br />" + " y: " + y + "<br />" + " target: " + _event.target;
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
    }
    function customEvent(_event) {
        console.log("Custom Event Ausgelöst");
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=script.js.map