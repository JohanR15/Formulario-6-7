let nombre, correo, mensaje;

let formulario = document.querySelector('#form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    ValidarDatos(nombre, correo, mensaje)
    guardarLocalStorage(nombre, correo, mensaje)
}

function ValidarDatos(nombre, correo, mensaje) {
    if (nombre.length == 0 || correo.length == 0 || mensaje.length == 0) {
        swal("¡ERROR!", "¡Completa los campos!", "error");
    }
}

function guardarLocalStorage(nombre, correo, mensaje) {
    localStorage.setItem('Nombre', nombre);
    localStorage.setItem('Correo', correo);
    localStorage.setItem('Mensaje', mensaje);
    ListarDatos()
}

function ListarDatos() {
    let nombreusu = localStorage.getItem('Nombre')
    let correousu = localStorage.getItem('Correo')
    let mensajeusu = localStorage.getItem('Mensaje')
}