const camposDoFormulario = document.querySelectorAll("[required]");

function verificaCampo(campo) {



};

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo))

});