const uploadForm = document.getElementById('uploadForm');
const imageInput = document.getElementById('imageInput');
const uploadButton = document.getElementById('uploadButton');
const gallery = document.querySelector('.gallery');

uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement('img');
      img.src = e.target.result;
      gallery.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
  
  uploadForm.reset();
});