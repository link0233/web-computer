"use strict";
window.addEventListener('load', function () {
    const Answer = document.getElementById("Answer");
    if (Answer != null) {
        Answer.innerHTML = '0';
    }
    let number = 0;
    const one = document.getElementById("one");
    const tue = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    one === null || one === void 0 ? void 0 : one.addEventListener('click', function () {
        number = number * 10 + 1;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
    tue === null || tue === void 0 ? void 0 : tue.addEventListener('click', function () {
        number = number * 10 + 2;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
    three === null || three === void 0 ? void 0 : three.addEventListener('click', function () {
        number = number * 10 + 3;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
    four === null || four === void 0 ? void 0 : four.addEventListener('click', function () {
        number = number * 10 + 4;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
    five === null || five === void 0 ? void 0 : five.addEventListener('click', function () {
        number = number * 10 + 5;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
    six === null || six === void 0 ? void 0 : six.addEventListener('click', function () {
        number = number * 10 + 6;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
    seven === null || seven === void 0 ? void 0 : seven.addEventListener('click', function () {
        number = number * 10 + 7;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
    eight === null || eight === void 0 ? void 0 : eight.addEventListener('click', function () {
        number = number * 10 + 8;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
    nine === null || nine === void 0 ? void 0 : nine.addEventListener('click', function () {
        number = number * 10 + 9;
        if (Answer != null) {
            Answer.innerHTML = number.toString();
        }
    });
});
