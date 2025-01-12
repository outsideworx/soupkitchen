const allowedFiles = ['menu.webp', 'menu1.webp', 'menu2.webp'];
const fileInput = document.querySelector('.file-input');
const customButton = document.querySelector('.custom-file-button');
const uploadForm = document.getElementById('uploadForm');
const errorMessage = document.getElementById('errorMessage');
const passwordInput = document.getElementById('passwordInput');
const uploadButton = document.querySelector('.upload-button');

// Enable upload button only if password is entered
passwordInput.addEventListener('input', () => {
    uploadButton.disabled = passwordInput.value.trim() === '' || customButton.textContent === 'Select File' || errorMessage.style.display === 'block';
});

// Update custom button text when file is selected
fileInput.addEventListener('change', () => {
    const fileName = fileInput.files[0]?.name || 'Select File';
    customButton.textContent = fileName;

    // Validate file name
    if (!allowedFiles.includes(fileName)) {
        errorMessage.style.display = 'block';
        uploadButton.disabled = true;
    } else {
        errorMessage.style.display = 'none';
        uploadButton.disabled = passwordInput.value.trim() === '';
    }
});

// Prevent form submission if file name is invalid
uploadForm.addEventListener('submit', (e) => {
    const fileName = fileInput.files[0]?.name;

    if (!allowedFiles.includes(fileName)) {
        e.preventDefault();
        errorMessage.style.display = 'block';
    }
});

// Open Modal
function openModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = src;
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}