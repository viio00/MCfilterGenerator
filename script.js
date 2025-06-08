function showPage(pageId) {
    document.getElementById(pageId).style.display = "flex";
    }

const dropBox =  document.getElementById('dropBox');
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

dropBox.addEventListener('click', () => fileInput.click());

dropBox.addEventListener('dragover', (e) => {
  e.preventDefault(); 
  dropBox.classList.add('hover');
});

dropBox.addEventListener('dragleave', () => {
    dropBox.classList.remove('hover');
    });

dropBox.addEventListener('drop', (e) => {
    e.preventDefault(); 
    dropBox.classList.remove('hover');
    
    const file = e.dataTransfer.files[0]; 
    if (file) showPreview(file); 
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0]; 
  if (file) showPreview(file); 
});


function showPreview(file) { //accepts file 
    const reader = new FileReader(); //reads file
    reader.onload = function (e) { //event listener when file is finished loading
    preview.src = e.target.result; //ontains file content
    //This sets the src (source) of an image element 
    // (usually an <img id="preview">) to the file content.
    };
    
    reader.readAsDataURL(file); //This tells the FileReader to read the file as a Data URL.
}

//mirror -- used in order to measure width of the text input (then add padding)
const textInput = document.getElementById('text');
const mirror = document.getElementById('widthMirror');

textInput.addEventListener('input', () => {
  mirror.textContent = textInput.value || textInput.placeholder;
  textInput.style.width = mirror.offsetWidth + 20 +'px';
});

const textBox = document.getElementById('textBox');
let isDragging = false;
let offsetX=0, offsetY=0;

textBox.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - textBox.offsetLeft;
    offsetY = e.clientY - textBox.offsetTop;
});

textBox.addEventListener("mousemove", (e) => {
  if (isDragging) {
    textBox.style.position = 'absolute';
    textBox.style.left = (e.clientX - offsetX) + "px";
    textBox.style.top = (e.clientY - offsetY) + "px";
  }
});

textBox.addEventListener("mouseup", () => {
  isDragging = false;
});

function iconDrag(pageId) {
    document.getElementById(pageId).style.display = "block";

    const icon = document.getElementById(pageId);
    let isDragging = false;
    let offsetX=0, offsetY=0;
    
    icon.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - icon.offsetLeft;
    offsetY = e.clientY - icon.offsetTop;
  });

  icon.addEventListener("mousemove", (e) => {
    if (isDragging) {
      icon.style.position = 'absolute';
      icon.style.left = (e.clientX - offsetX) + "px";
      icon.style.top = (e.clientY - offsetY) + "px";
      }
    });

    icon.addEventListener("mouseup", () => {
    isDragging = false;
    });

}
