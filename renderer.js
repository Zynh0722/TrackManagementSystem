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
}

for (const droppable of droppables) {
    droppable.addEventListener('dragover', dragOver);
    droppable.addEventListener('dragenter', dragEnter);
    droppable.addEventListener('dragleave', dragLeave);
    droppable.addEventListener('drop', dragDrop);
}

function dragStart(driver) {
    pickedDriver = driver.target;
    setTimeout(() => this.className += ' hold', 10);
    setTimeout(() => this.className = 'invisible', 10);
    vehicle_test.setAttributes(pickedDriver);
    // var print = strong.substring(strong.indexOf("driver="), strong.indexOf("\">"));
    // console.log(print);
}

function dragEnd() {
    console.log("dragEnd");
    this.className = 'driver';
    pickedDriver = null;
    // pickedADriver = false;
}

function dragOver(e) {
    console.log("dragOver");
    e.preventDefault();
}

function dragEnter(e) {
    // if (pickedADriver) {
        console.log("dragEnter");
        e.preventDefault();
        this.className += ' hovered';
    // }
}

function dragLeave() {
    // if (pickedADriver) {
        console.log("dragLeave");
        this.className = this.className.substr(0, this.className.lastIndexOf(" "));
    // }
}

function dragDrop() {
    // if (pickedADriver) {
        console.log("dragDrop");
        this.className = this.className.substr(0, this.className.lastIndexOf(" "));
        this.append(pickedDriver);
    // }
}


