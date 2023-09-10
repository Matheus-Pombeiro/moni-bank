import eUmCPF from "./validaCPF.js";

const camposDoFormulario = document.querySelectorAll("[required]");

function verificaCampo(campo) {

    if (campo.name == "cpf" && campo.value.length >= 11) {
        eUmCPF(campo);
    }

};

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo))

});