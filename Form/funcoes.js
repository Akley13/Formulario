// $ - É uma representação das funções do jquery - escopo
// Function - É uma palavra reservada e ao declarar (váriaves)

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

$("#frmCadastro").bind("submit", function(){

}); //bind = vinculo