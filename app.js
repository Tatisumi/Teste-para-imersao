function pesquisar() {
    //function: é executado 1 vez, ja o for é a quantidade de vezes que os elementos aparecem
//() para indicar q é função / {} o que quero que aconteça
//function para criar funções
//console.log(dados);

let section = document.getElementById("resultados-pesquisa");
//Mostra q é HTML      O tipo dentro  Pegue o elemento q tenha esse ID

let campoPesquisa = document.getElementById ("campo-pesquisa").value //value será tudo que esta escrito dentro da < > no HTML
//Camel Case 

if (!campoPesquisa) { // "!" é igual a: == ""
// == para comparar
section.innerHTML = "<p>Nada foi digitado, escreva algo primeiro"
    return //nao executará nenhum codigo abaixo se "vazio"
};

campoPesquisa = campoPesquisa.toLowerCase();
//trasnforma  o conteudo que foi digitado em letra minuscula

//declarar variavel, dar nome e valor
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

//para cada / dado? (referenciando) / dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    //setitulo includes campoPesquisa ... então faça isso
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //cria um novo elemento              || = "ou"
        //dentro desse HTML  /  = é atribuir
        resultados += `
        <div>
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link}target="_blank">Mais informacões</a>
        </div>
        `
    ;
    }
}

// o "!" que dizer: se nada for encontrado, faça isso...
if (!resultados) {
    resultados = "<p>Nada foi encontrado<p>"
}

section.innerHTML = resultados
//Cria algo para visualizar o HTML atraves do JavaScript
}

// String: Tipo de dado utilizado para representar texto.
// As strings em JavaScript são imutáveis, ou seja, seu valor não pode ser alterado diretamente.
// Elas são delimitadas por aspas simples ('') ou duplas ("").