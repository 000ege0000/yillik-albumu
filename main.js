function addPhoto() {
  const fileInput = document.getElementById('file-input');
  const gallery = document.getElementById('gallery');

  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      gallery.appendChild(img);
    }

    reader.readAsDataURL(file);
    fileInput.value = ''; // Fotoğraf yüklendikten sonra input'u sıfırlıyoruz.
  } else {
    alert('Lütfen bir fotoğraf seçin!');
  }
}
