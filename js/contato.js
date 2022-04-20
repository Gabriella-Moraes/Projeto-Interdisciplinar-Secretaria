function validar(){
    var nome = contato.nome.value;
    var curso = contato.curso.value;
    var mensagem = contato.mensagem.value;

    if(nome==""){
        alert("Nome é campo de preenchimento obrigatorio!");
        contato.nome.focus();
        return false;
    }

    if(curso==""){
        alert("Curso é campo de preenchimento obrigatorio!");
        contato.cpf.focus();
        return false;
    }

}