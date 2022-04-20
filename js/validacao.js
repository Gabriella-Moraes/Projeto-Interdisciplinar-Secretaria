function validar(){

    var nome= valida.nome.value;
    var cpf = valida.cpf.value;
    var rg = valida.rg.value;
    var emissao = valida.emissao.value;
    var uf = valida.uf.value;
    var nomemae = valida.nomemae.value;
    var data = valida.data.value;
    var email = valida.email.value;
    var telefone = valida.telefone.value;
    var celular = valida.celular.value;
    var cep = valida.celular.value;
    var curso = valida.curso.value;
    var turno = valida.turno.value;
    var semestre = valida.semestre.value;
    var datapedido = valida.datapedido.value;
    var tipodeperiodo = valida.datapedido.value;
    var senha = valida.senha.value;
    var enviar = valida.enviar.value;

   
    if(nome=="") {
        alert("O nome campo é obrigatório");
        valida.nome.focus();
        return false; //return false é para o formulario não ser enviado sem a informação que foi solicitada. 
    }
    if(cpf==""){
        alert("CPF é campo de preenchimento obrigatório!");
        valida.cpf.focus();
        return false;
    }
    if(cpf.length != 14){
        alert("CPF inválido");
        valida.cpf.focus();
        return false;
    }
    if(rg==""){
        alert("RG é campo de preenchimento obrigatório!");
        valida.cpf.focus();
        return false;
    }
    if(rg.length != 9){
        alert("RG inválido");
        valida.cpf.focus();
        return false;
    }

    if(emissao==""){
        alert("O campo emissoa é obrigatório");
        valida.nome.focus();
        return false; //return false é para o formulario não ser enviado sem a informação que foi solicitada. 
    }

    if(uf==""){
        alert("O campo UF é obrigatório! ");
        valida.uf.focus();
        return false;
    }
    if(nomemae==""){
        alert("O campo Nome da Mãe é obrigatório! ");
        valida.nomemae.focus();
        return false; 
    }
    if(data){
        alert("O campo data é obrigatório! ");
        valida.data.focus();
        return false;
    }
    if (email==""){
        alert("Campo E-mail é de preenchimento obrigatório");
        valida.email.focus();
        return false;
    }

    if(telefone==""){
        alert("Telefone é campo de preenchimento obrigatório!");
        valida.telefone.focus();
        return false;
    }
    if(rg.length != 10){
        alert("Telefone inválido");
        valida.telefone.focus();
        return false;
    }

    if(celular==""){
        alert("Telefone é campo de preenchimento obrigatório!");
        valida.telefone.focus();
        return false;
    }
    if(celular.length != 11){
        alert("Celular inválido");
        valida.celular.focus();
        return false;
    }

    if(cep=="") {
        alert("O CEP é obrigatório");
        valida.cep.focus();
        return false; 
    }

    if(curso=="") {
        alert("O curso é obrigatório");
        valida.cuso.focus();
        return false; 
    }

    if(turno=="") {
        alert("O turno é obrigatório");
        valida.turno.focus();
        return false; 
    }

    if(semestre=="") {
        alert("O semestre é obrigatório");
        valida.semestre.focus();
        return false; 
    }

    if(datapedido=="") {
        alert("O campo Data do pedido é obrigatório");
        valida.datapedido.focus();
        return false; 
    }

    if(tipodetarifa=="") {
        alert("O tipo de tarifa é obrigatório");
        valida.tipodetarifa.focus();
        return false; 
    }






}