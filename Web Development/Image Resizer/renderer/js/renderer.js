const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

function loadImage(e) {
  const file = e.target.files[0];


  // if the file is not image then show this
  if (!isFileImage(file)) {
      alertError('Please select an image file');
        return;
  }

  //Get original dimensions
  const image = new Image();
  image.src = URL.createObjectURL(file);
  image.onload = function () {
    widthInput.value =  this.width;
    heightInput.value = this.height;
  };

  // display form after successful image selection
  form.style.display = 'block';
  filename.innerHTML = file.name;
  outputPath.innerText = path.join(os.homedir(), 'imageresizer');
  alertSuccess('Image Selected Successfully!!!');
}

// Send Image data to main
function sendImage(e){
  e.preventDefault();

  const width = widthInput.value;
  const height = heightInput.value;
  const imgPath = img.files[0].path;

  if(!img.files[0]) {
    alertError('Please upload an image!');
    return;
  }

  if(width === '' || height === '') {
    alertError('Please fill in width and height!');
    return;
  }

  // Send to main using ipcRenderer
  ipcRenderer.send('image:resize', {
    imgPath,
    width,
    height
  });

}

// // Catch the image:done event
ipcRenderer.on('image:done', () => {
  alertSuccess('Image resized to ${widthInput.value} x ${heightInput.value}');
});

//check if the uploaded file is image only
function isFileImage(file) {
    const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    return file && acceptedImageTypes.includes(file['type'])
}

function alertError(message) {
  Toastify.toast ({
    text : message,
    duration : 5000,
    close : false,
    style : {
      background : 'red',
      color : 'white',
      textAlign : 'center'
    }
  });
}

function alertSuccess(message) {
  Toastify.toast ({
    text : message,
    duration : 3000,
    close : false,
    style : {
      background : 'green',
      color : 'white',
      textAlign : 'center'
    }
  });
}

img.addEventListener('change', loadImage);
form.addEventListener('submit',sendImage);
