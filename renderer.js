// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const {Vehicle, Driver} = require('./src/classes');

let vehicle_test = new Vehicle("DeLorean", 1985, "Space grey", "Flux capacitor", "Timey Wimey", "Amblin Entertainment", "Time Travelers Anonymous")

const drivers = document.querySelectorAll('.driver');
const droppables = document.querySelectorAll('.droppable');

var pickedDriver = null;

for (const driver of drivers) {
    driver.addEventListener('dragstart', dragStart);
    driver.addEventListener('dragend', dragEnd);
    // driver.addEventListener('dblclick', DblClick)
}

for (const droppable of droppables) {
    droppable.addEventListener('dragover', dragOver);
    droppable.addEventListener('dragenter', dragEnter);
    droppable.addEventListener('dragleave', dragLeave);
    droppable.addEventListener('drop', dragDrop);
}
//
// function DblClick(e) {
//     if(e.target.parentElement.className !== "pool") {
//         e.target.parentElement.className = e.target.parentElement.className.replace(" filled", "");
//         document.getElementsByClassName("pool")[0].append(e.target);
//     }
// }

function dragStart(driver) {
    pickedDriver = driver.target;
    setTimeout(() => this.className += ' hold', 10);
    setTimeout(() => this.className = 'invisible', 10);
    driver.target.parentElement.className = driver.target.parentElement.className.replace(" filled", "");
    // vehicle_test.setAttributes(pickedDriver);
    // var print = strong.substring(strong.indexOf("driver="), strong.indexOf("\">"));
    // console.log(print);
}

function dragEnd() {
    // console.log("dragEnd");
    this.className = 'driver';
    pickedDriver = null;
}

function dragOver(e) {
    // console.log("dragOver");
    e.preventDefault();
}

function dragEnter(e) {
    // console.log("dragEnter");
    e.preventDefault();
    // if(!this.classList.contains("filled")) {
    this.className += ' hovered';
    // }
}

function dragLeave() {
    // console.log("dragLeave");
    this.className = this.className.split(" hovered").join("");
}

function dragDrop(e) {
    console.log("dragDrop");
    if (!this.classList.contains("filled")) {
        this.append(pickedDriver);
        this.className = this.className.replace(" hovered", "");
        if (!this.classList.contains("pool")) {
            this.className += " filled"
        }
    }
}

