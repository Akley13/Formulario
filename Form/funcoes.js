// $ - É uma representação das funções do jquery - escopo
// Function - É uma palavra reservada e ao declarar (váriaves)

//função global
$(function(){
console.log('Início da função para fazer registro de dados.')
var operacao = "A"; // A - Adição/Inclusão; E - "Edição"
//var indice_selecionado
//var indice_selecionado
var indice_selecionado = -1;

// Recuperar os dados de alunos inseridos pelo formulário.
var tblAluno = localStorage.getItem("alunos");
console.log(tblAluno);

});

// Criar uma função para direcionar a operação que será realizada:
// A - Adição/Inclusão; E - "Edição"
// Precisamos capturar os dados através da função quando o botão de 
// submeter for acionado.

//função unária(ou solitária)
$("#frmCadastro").bind("submit", function(){ //bind = vínculo

    console.log("frmCadastro foi invocado!")

    var codigo = $("#txtCodigo").val(); // obtendo dados digitados pelo usuário
    var nome = $("#txtNome").val(); // obtendo dados digitados pelo usuário

    alert(codigo);
    alert(nome);

    console.log("Código: ", codigo);
    console.log("Nome: ", nome);

    return true;
}); 