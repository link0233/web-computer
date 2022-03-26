"use strict";
/**
 * class AnswerClass
 * TODO: getValue & appendVal 會有溢位問題
 */
class AnswerClass {
    constructor() {
        this.decimalPointClick = false;
        this.el = document.getElementById("Answer");
        //this.decimalPointClick = false;
        this.intNumber = 0;
    }
    getValue() {
        if (this.el !== null) {
            return Number(this.el.innerHTML);
        }
        return 0;
    }
    appendVal(val) {
        if (this.el !== null) {
            const currVal = this.getValue();
            const nextVal = currVal * 10 + val;
            this.el.innerHTML = nextVal.toString();
        }
    }
    decimal_point() {
        this.decimalPointClick = true;
        console.log(this.decimalPointClick);
    }
    ok(type) {
        if (type == "add") {
            Type = "add";
            upNumber = this.getValue();
        }
        if (type == "epual") {
            if (this.el !== null) {
                if (Type == "add") {
                    this.el.innerHTML = String(upNumber + this.getValue());
                    Type = "epual";
                }
            }
        }
        if (this.el !== null && type !== "epual") {
            this.el.innerHTML = "0";
        }
    }
}
let upNumber = 0;
let Type = "none";
/**
 * onload
 */
window.addEventListener("load", function () {
    // initialize answerObj
    const answerObj = new AnswerClass();
    /**
     * number element onClick handler
     */
    function numberElementOnClickHander(evt) {
        if (evt.target instanceof HTMLButtonElement) {
            if (answerObj.el && Type == "epual") {
                answerObj.el.innerHTML = "0";
                Type = "none";
            }
            const valueAttr = evt.target.getAttribute("value");
            const numValueAttr = Number(valueAttr);
            answerObj.appendVal(numValueAttr);
        }
    }
    // mount click event handlers
    const numberElements = document.getElementsByClassName("number");
    for (const el of numberElements) {
        el.addEventListener("click", numberElementOnClickHander);
    }
    const decimalPoint = document.getElementById("decimal_point");
    decimalPoint === null || decimalPoint === void 0 ? void 0 : decimalPoint.addEventListener("click", answerObj.decimal_point);
    const add = document.getElementById("add");
    add === null || add === void 0 ? void 0 : add.addEventListener("click", function (evn) {
        answerObj.ok("add");
    });
    const epual = document.getElementById("epual");
    epual === null || epual === void 0 ? void 0 : epual.addEventListener("click", function (evn) {
        answerObj.ok("epual");
    });
});
