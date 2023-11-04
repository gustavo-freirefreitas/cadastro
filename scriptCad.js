const form = document.querySelector("#form");
const nomeInput = document.querySelector("#nome");
const dataInput = document.querySelector("#date");
const cidadeInput = document.querySelector("#cidade");
const CEPInput = document.querySelector("#CEP");
const endereçoInput = document.querySelector("#endereco");
const telInput = document.querySelector("#tel");
const botaoSubmit = document.getElementById("btnSalvar");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (nomeInput.value === "" || !nomeValido(nomeInput.value)) {

        swal("Atenção", "Por favor, preencha o Nome!", "warning");
        return;

    }

    if (dataInput.value === "") {

        swal("Atenção", "Por favor, preencha a Data!", "warning");
        return;

    }

    if (cidadeInput.value === "" || !cidadeValida(cidadeInput.value)) {

        swal("Atenção", "Por favor, preencha a Cidade!", "warning");
        return;

    }

    if (CEPInput.value === "" || !CEPValido(CEPInput.value)) {

        swal("Atenção", "Por favor, preencha o CEP!", "warning");
        return;

    }

    if (endereçoInput.value === "" || !endereçoValido(endereçoInput.value)) {

        swal("Atenção", "Por favor, preencha o Endereço!", "warning");
        return;

    }

    if (telInput.value === "" || !númeroValido(telInput.value)) {

        swal("Atenção", "Por favor, preencha o Número!", "warning");
        return;

    }

    swal("Obrigado", "Cliente Cadastrado!", "success");
    form.submit();

});

function nomeValido(nome) {

    const nomeRegex = new RegExp(

        /^([a-zA-Z]+\s?){3,20}$/g

    );

    if (nomeRegex.test(nome)) {

        return true

    } else {

        return false;

    }

}

function sobrenomeValido(sobrenome) {

    const sobrenomeRegex = new RegExp(

        /^([a-zA-Z]+\s?){3,20}$/g

    );

    if (sobrenomeRegex.test(sobrenome)) {

        return true

    }

    return false;

}

function cidadeValida(cidade) {

    const cidadeRegex = new RegExp(

        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/g

    );

    if (cidadeRegex.test(cidade)) {

        return true

    }

    return false;

}

function CEPValido(CEP) {

    const CEPRegex = new RegExp(

        /^[0-9]{5}-[0-9]{3}$/

    );

    if (CEPRegex.test(CEP)) {

        return true

    }

    return false;

}

function endereçoValido(endereço) {

    const endereçoRegex = new RegExp(

        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9\s]+$/

    );

    if (endereçoRegex.test(endereço)) {

        return true

    }

    return false;

}

function númeroValido(número) {

    const númeroRegex = new RegExp(

        /^[0-9]{1,6}$/

    );

    if (númeroRegex.test(número)) {

        return true

    }

    return false;

}