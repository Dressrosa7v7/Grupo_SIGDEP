document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("LoginFrm"); // Formulario de registro
  const loginForm = document.getElementById("Login");       // Formulario de login

  function mostrarMensaje(texto, tipo = "error") {
    const mensaje = document.getElementById("mensaje");
    if (!mensaje) return;

    mensaje.textContent = texto;
    mensaje.className = "auth__mensaje";

    if (tipo === "error") {
      mensaje.classList.add("auth__mensaje--error");
    } else {
      mensaje.classList.add("auth__mensaje--success");
    }

    mensaje.style.display = "block";

    setTimeout(() => {
      mensaje.style.display = "none";
    }, 4000);
  }

  // === Registro de usuario ===
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const usuario = document.getElementById("userRegistroL").value.trim();
      const Contra = document.getElementById("passwordRegistroL").value.trim();
      const Contra2 = document.getElementById("confirmRegistroL").value.trim();

      if (Contra !== Contra2) {
        mostrarMensaje("Las contraseñas no coinciden.");
        return;
      }

      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const existeUsuario = usuarios.some(
        (u) => u.usuario.toLowerCase() === usuario.toLowerCase()
      );

      if (existeUsuario) {
        mostrarMensaje("El usuario ya existe. Elige otro.");
        return;
      }

      usuarios.push({ usuario, password: Contra });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      mostrarMensaje("¡Registro exitoso!", "success");

      setTimeout(() => {
        localStorage.setItem("usuarioActual", usuario);
        window.location.href = "../Index.html"; // Redirige después del registro
      }, 1500);
    });
  }

  // === Inicio de sesión ===
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const user = document.getElementById("userLogin").value.trim();
      const pass = document.getElementById("passwordLogin").value.trim();

      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      const usuarioValido = usuarios.find(
        (u) => u.usuario.toLowerCase() === user.toLowerCase() && u.password === pass
      );

      if (usuarioValido) {
        mostrarMensaje("Inicio de sesión exitoso", "success");
        setTimeout(() => {
          localStorage.setItem("usuarioActual", user);
          window.location.href = "../pages/AddUser.html"; // Redirige al menu principal
        }, 1500);
      } else {
        mostrarMensaje("Usuario o contraseña incorrectos.");
      }
    });
  }
});
