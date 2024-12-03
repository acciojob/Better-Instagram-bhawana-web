//your code here
// Get all the draggable elements
const draggables = document.querySelectorAll('.draggable');

// Add event listeners for drag events
draggables.forEach(div => {
  div.addEventListener('dragstart', dragStart);
  div.addEventListener('dragover', dragOver);
  div.addEventListener('dragenter', dragEnter);
  div.addEventListener('dragleave', dragLeave);
  div.addEventListener('drop', drop);
  div.addEventListener('dragend', dragEnd);
});

let draggedElement = null;

// Drag Start Event
function dragStart(e) {
  draggedElement = e.target;
  setTimeout(() => {
    draggedElement.style.visibility = 'hidden'; // Hide the dragged element
  }, 0);
}

// Drag Over Event
function dragOver(e) {
  e.preventDefault();
}

// Drag Enter Event
function dragEnter(e) {
  e.preventDefault();
  this.style.border = '2px dashed #000'; // Show a border when over a valid target
}

// Drag Leave Event
function dragLeave() {
  this.style.border = ''; // Remove the border when leaving the target
}

// Drop Event
function drop(e) {
  e.preventDefault();
  if (draggedElement !== this) {
    // Swap the background images between dragged and target divs
    const draggedImage = draggedElement.style.backgroundImage;
    const targetImage = this.style.backgroundImage;

    draggedElement.style.backgroundImage = targetImage;
    this.style.backgroundImage = draggedImage;
  }
  this.style.border = ''; // Remove the border on drop
}

// Drag End Event
function dragEnd() {
  draggedElement.style.visibility = 'visible'; // Make the dragged element visible again
}
