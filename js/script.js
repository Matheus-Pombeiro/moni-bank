import eUmCPF from "./validaCPF.js";
import eMaiorDeIdade from "./validaIdade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

function verificaCampo(campo) {

    if (campo.name == "cpf" && campo.value.length >= 11) {
        eUmCPF(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        eMaiorDeIdade(campo);
    }

};

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo))

});