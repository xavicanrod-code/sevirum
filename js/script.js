// ===============================
// SEVIRUM - SCRIPT PRINCIPAL
// ===============================

console.log("Sevirum cargado correctamente");

// ===============================
// FORMULARIO DE CREAR CUENTA
// ===============================

const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        // INPUTS

        const nombres = formulario.querySelectorAll("input")[0].value.trim();

        const apellidos = formulario.querySelectorAll("input")[1].value.trim();

        const correo = formulario.querySelectorAll("input")[2].value.trim();

        const telefono = formulario.querySelectorAll("input")[3].value.trim();

        const nickname = formulario.querySelectorAll("input")[4].value.trim();

        const contraseña = formulario.querySelectorAll("input")[5].value.trim();

        const verificarContraseña = formulario.querySelectorAll("input")[6].value.trim();

        const terminos = document.getElementById("terminos");

        // VALIDAR CAMPOS VACIOS

        if (
            nombres === "" ||
            apellidos === "" ||
            correo === "" ||
            telefono === "" ||
            nickname === "" ||
            contraseña === "" ||
            verificarContraseña === ""
        ) {

            alert("Por favor completa todos los campos.");
            return;
        }

        // VALIDAR EMAIL

        if (!correo.includes("@") || !correo.includes(".")) {

            alert("Introduce un correo electrónico válido.");
            return;
        }

        // VALIDAR TELEFONO

        if (telefono.length < 9) {

            alert("Introduce un número de teléfono válido.");
            return;
        }

        // VALIDAR CONTRASEÑA

        if (contraseña.length < 6) {

            alert("La contraseña debe tener mínimo 6 caracteres.");
            return;
        }

        // VERIFICAR CONTRASEÑAS

        if (contraseña !== verificarContraseña) {

            alert("Las contraseñas no coinciden.");
            return;
        }

        // VALIDAR TERMINOS

        if (!terminos.checked) {

            alert("Debes aceptar los términos y condiciones.");
            return;
        }

        // TODO CORRECTO

        alert("Cuenta creada correctamente. Bienvenido a Sevirum.");

        formulario.reset();

    });

}

// ===============================
// EFECTO SUAVE EN LAS TARJETAS
// ===============================

const noticias = document.querySelectorAll(".noticia");

noticias.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";
    });

});