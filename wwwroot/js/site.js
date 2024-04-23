function showConfirmation() {
    var confirmDeleteSpan = document.getElementById('confirmDeleteSpan_');
    var deleteSpan = document.getElementById('deleteSpan_');

    confirmDeleteSpan.style.display = 'inline-block';
    deleteSpan.style.display = 'none';
}

function cancelDelete() {
    var confirmDeleteSpan = document.getElementById('confirmDeleteSpan_');
    var deleteSpan = document.getElementById('deleteSpan_');

    confirmDeleteSpan.style.display = 'none';
    deleteSpan.style.display = 'inline-block';
}

function toggleEdit() {
    var editForms = document.getElementById('editForms');
    var editButton = document.getElementById('editButton');

    if (editForms.style.display === 'none') {
        editForms.style.display = 'block';
    } else {
        editForms.style.display = 'none';
    }
}

function previewImage() {
    var preview = document.getElementById('preview');
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.style.display = 'none';
    }
}

function cancelEdit() {
    window.location.href = window.location.href;
}

function submitForm() {
    document.getElementById('editForm').submit();
}

