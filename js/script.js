function bienvenida() {
    console.log('¡Bienvenido/a al sitio del Día de la Tierra!');
}

function mostrarDatoCurioso() {
    alert('🌿 Sabías que los árboles pueden comunicarse entre sí a través de una red subterránea de hongos llamada "Wood Wide Web"? 🍄');
}

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }
    alert("¡Formulario enviado correctamente!");
    return true;
}

function cambiarColor() {
    document.body.style.backgroundColor = "#e8f5e9";
}

function resetearColor() {
    document.body.style.backgroundColor = "#ffffff";
}

// Vista previa de imagen subida
document.addEventListener('DOMContentLoaded', function() {
    const imagenInput = document.getElementById('imagen');
    const preview = document.getElementById('preview');

    if(imagenInput) {
        imagenInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    preview.innerHTML = `<img src="${event.target.result}" alt="Imagen subida">`;
                }
                reader.readAsDataURL(file);
            }
        });
    }
});
