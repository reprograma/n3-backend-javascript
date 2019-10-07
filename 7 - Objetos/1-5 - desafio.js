/*
Agora estamos mais próximas do que é trabalhar com estruturas de dados.
Para este projeto, vamos praticar um pouco mais a consulta, alteração e criação de objetos a partir de uma base de dados.

Requisitos: A partir da estrutura de dados fornecida, crie funções para as seguintes tarefas de usuário:

1) Consultar todas as informações de determinado tipo, informado por parâmetro. Por exemplo, 'type' retorna uma lista com todos os tipos de Pokémon e 'name' retorna uma lista com todos os nomes dos Pokémons.

2) Filtrar as informações, recebendo o critério do filtro por parâmetro. Por exemplo, 'type' retorna o nome de todos os Pokémons daquele tipo.

3) Ordenar as informações, recebendo por parâmetro o critério para ordenar e a ordem. Por exemplo, 'name' e 'asc' retorna uma lista com todos os nomes de Pokémon, em ordem ascendente.

A lógica deve ser criada seguindo o princípio de funções "puras". Cada função deverá fazer apenas uma tarefa e retornar um resultado. A função não deve "chamar" nenhuma variável externa/global, e sim receber todas as informações que ela necessita por parâmetros.

Exemplo: uma função de filtro que recebe uma array e uma condição, e retorna o resultado de acordo.

const meuArray = [1, 2, true, "banana", 3]

function filter(arrayQualquer, condicao){
	//seu código aqui
	//return informação desejada
}
filter(meuArray, 'number') ===> [1, 2, 3] 

IMPORTANTE:
- Os objetos/arrays originais não devem ser alterados!
- Existe mais de uma forma de fazer as coisas, o principal é praticar e compartilhar.

*/