var usuario_valido = "admin";
var contrasena_valida = "1234";


var formulario = document.getElementById("login-form");
var usuario = document.getElementById("username");
var contrasena = document.getElementById("password");
var mensaje = document.getElementById("error-message");


formulario.addEventListener("submit", function(event) {

  event.preventDefault();

  if (usuario.value == usuario_valido && contrasena.value == contrasena_valida) {
    formulario.submit();
    
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
  }
});