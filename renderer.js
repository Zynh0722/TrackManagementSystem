// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of  empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    console.log("dragStart");
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 5);
}

function dragEnd() {
    console.log("dragEnd");
    this.className = 'fill';
}

function dragOver(e) {
    console.log("dragOver");
    e.preventDefault();
}

function dragEnter(e) {
    console.log("dragEnter");
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    console.log("dragLeave");
    this.className = 'empty';
}

function dragDrop() {
    console.log("dragDrop");
    this.className = 'empty';
    this.append(fill);
}

