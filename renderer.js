// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const driver = document.querySelector('.driver');
const empties = document.querySelectorAll('.empty');

var pickedADriver = false;

driver.addEventListener('dragstart', dragStart);
driver.addEventListener('dragend', dragEnd);

for (const empty of  empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    console.log("dragStart");
    if (this.contains(driver)) {
        pickedADriver = true;
        console.log("HAS A DRIVER");
        this.className += ' hold';
        setTimeout(() => this.className = 'invisible', 10);
    }
}

function dragEnd() {
    console.log("dragEnd");
    this.className = 'driver';
    pickedADriver = false;
}

function dragOver(e) {
    console.log("dragOver");
    e.preventDefault();
}

function dragEnter(e) {
    if(pickedADriver) {
        console.log("dragEnter");
        e.preventDefault();
        this.className += ' hovered';
    }
}

function dragLeave() {
    if (pickedADriver) {
        console.log("dragLeave");
        this.className = 'empty';
    }
}

function dragDrop() {
    if(pickedADriver) {
        console.log("dragDrop");
        this.className = 'empty';
        this.append(driver);
    }
}


