/*
Array para Object
Escreva uma função que receba um array 2d e retorne um objeto com cada par de elementos do array como um par chave-valor. Por exemplo:

const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]]

const obj = {
  fabricante : 'Ford',
  modelo : 'Mustang',
  ano : 1964
}

Escreva também uma função que faça o contrário. Transforme os pares de key-value de um object em um array 2d.
*/

///////////////////////

/*
Dado um objeto como parâmetro, contar a quantidade de propriedades que existem no objeto e retornar este valor.
Exemplo:

const output = objectPropertiesCounter({ 'nome': 'Paola', 'sobrenome': 'Bracho' });
console.log(ouput); // => 2
*/

///////////////////////

/*
Escreva uma função chamada "removeStringValuesLongerThan".
Dado um número e um objeto, "removeStringValuesLongerThan" remove qualquer propriedade no objeto dado cujos valores são strings maiores que o número fornecido.

Exemplo de entrada:
const obj = {
  nome: 'Montana',
  idade: 20,
  local: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { idade: 20, local: 'Texas' }
*/

///////////////////////

/*
Dado um objeto, uma chave e um índice numérico, a função getElementOfArrayProperty retorna o valor do elemento no índice fornecido do array localizado dentro do objeto informado na chave especificada.

Notas:
	Se a array estiver vazia, ela deve devolver undefined.
	Se o índice fornecido estiver fora do intervalo da array localizada na chave especificada, ela deverá devolver undefined.
	Se a propriedade na chave fornecida não for uma array, ela deve devolver undefined.
	Se não houver propriedade na chave, ela deve devolver undefined.

Exemplo de entrada:

const obj = {
 key: ['Satanás', 'Churrumina']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Satanás'
*/

///////////////////////

/*

Escreva uma função chamada olarCliente.

Dado um nome, olarCliente retorna uma saudação com base em quantas vezes o cliente visitou o restaurante. Consulte o objeto dadosClientes.

A saudação deve ser diferente, dependendo do nome da reserva.

Caso 1 - Cliente desconhecido (o nome não está presente nos dados do cliente):

var output = olarCliente('Peralta');
console.log(output); // --> 'Olar! Essa é a sua primeira vez aqui?'

Caso 2 - Cliente que visitou apenas uma vez (o valor de 'visitas' é 1)

var output = olarCliente('Santiago');
console.log(output); // --> 'Olar novamente, Santiago! Que bom que gostou da primeira vez!'

Caso 3 - Cliente usual: (o valor de 'visitas' é maior que 1)

var output = olarCliente('Holt');
console.log(output); // --> 'Olar novamente, Juliana! Boas vindas novamente!'

Notas:

    Sua função não deve alterar o objeto dadosClientes para atualizar o número de visitas.
    Não insira no código os dados exatos da amostra. Não faça nada do tipo:

if (nome === 'Santiago') {
  // faça algo
}

const dadosClientes = {
  Santiago: {
    visits: 1,
  },
  Holt: {
    visits: 2,
  },
  Jeffords: {
    visits: 3,
  },
  Diaz: {
    visits: 4,
  },
};

*/

///////////////////////

/*

Escreva uma função 'transformFirstAndLast' que receba um vetor e retorne um objeto com:
  1. o primeiro elemento do vetor como a chave do objeto e
	2. o último elemento do vetor como o valor dessa chave.

Exemplo de entrada:
['Rainha', 'Elizabeth', 'de Copas', 'Marta']

Valor de retorno da função (saída):
{Rainha: 'Marta'}

Não altere a array de entrada. Suponha que todos os elementos da array de entrada sejam do tipo string.
Observe que a array de entrada pode ter um número variável de elementos. Seu código deve responder de forma flexível.
Por exemplo, você deve manipular entradas como:

['Kevin', 'Bacon', 'Smith', 'Hart', 'Spacey', 'Costner']

Saída da função:
{Kevin: "Costner"}
*/

///////////////////////

/*
Escreva uma função chamada "getAllKeys" que retorna um array com todas as chaves do objeto de entrada.

Exemplo de entrada:

{
  nome: 'Juliana',
  idade: 38,
  temGatos: true
}

Valor de retorno da função (saída):
['nome', 'idade', 'temGatos']

Tenha em mente que sua função deve ser capaz de manipular qualquer objeto passado nela.
Por exemplo, você também deve tratar uma entrada como a seguinte:

{
  a: 'a',
  number: 11,
  hungry: true,
  wins: 1
}

Saída da função:
['a', 'number', 'hungry', 'wins']

*/

///////////////////////

//Escreva uma função chamada "getAllValues" que retorna um array com todos os valores do objeto de entrada.
//Utilize como modelo o exercício anterior

//////////////////////

/*
Escreva uma função chamada "transformEmployeeData" que transforma alguns dados de funcionários de um formato para outro.
O argumento ficará assim:

[
  [
    ['nome', 'Helena'], ['sobrenome', 'Roitmann'], ['idade', 42], ['cargo', 'front-end']
  ]
  [
    ['nome', 'Nazaré'], ['sobrenome', 'Tedesco'], ['idade', 50 ], ['cargo', 'PO']
  ]
]

Dada a entrada, o valor de retorno deve ficar assim:

[
    {nome: 'Helena', sobrenome: 'Roitmann', idade: 42, cargo: 'front-end'},
    {nome: 'Nazaré', sobrenome: 'Tedesco', idade: 50, cargo: 'PO'}
]

Observe que a entrada pode ter um número diferente de linhas ou chaves diferentes da amostra fornecida.
Por exemplo, digamos que o departamento de recursos humanos inclua um campo "tamanhoCamiseta" em cada registro de funcionário. Seu código deve ser flexível para tratar essa situação.

*/

//////////////////////

/*

Escreva uma função chamada "convertObjectToList" que converte um objeto literal em um array de arrays, como neste exemplo:

{
  nome: 'Maria',
  idade: 35,
  cargo: 'programadora'
}

Valor devolvido:
[['nome', 'Maria'], ['idade', 35], ['cargo', 'programadora']]

Tenha em mente que sua função deve ser capaz de manipular qualquer objeto como este, não apenas a amostra exata fornecida acima.
Por exemplo, você também deve conseguir manipular a entrada abaixo ou qualquer outro objeto que contenha pares de chave-valor simples.

{
  especie: 'felino',
  nome: 'Satanás',
  peso: 6.66
}

*/

 //////////////////////
/*
Escreva uma função chamada "getSumOfAllElementsAtProperty".
Dado um objeto e uma chave, "getSumOfAllElementsAtProperty" devolve a soma de todos os elementos da matriz.

Notas:
  1. Se o array estiver vazio, ela deve devolver 0.
  2. Se a propriedade na chave fornecida não for um array, ela deverá devolver 0.
  3. Se não houver nenhuma propriedade na chave fornecida, ela deverá devolver 0.

const obj = {
  key: [4, 1, 8]
};
const output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // -> 13
*/

 //////////////////////

/*

Escreva uma função chamada "addObjectProperty".
Dados dois objetos e uma chave, "addObjectProperty" define uma nova propriedade no primeiro objeto na chave determinada. O valor dessa nova propriedade é o segundo objeto completo.

const pessoa1 = {
  nome: 'Smithers',
  role: 'secretário'
};
const pessoa2 = {
  nome: 'Sr. Burns',
  role: 'chefe'
};
addObjectProperty(pessoa1, 'gerente', pessoa2);
console.log(pessoa1.gerente);
// --> { nome: 'Sr. Burns', role: 'chefe' }

*/

//////////////////////

/*

Escreva uma função chamada "addFullNameProperty".
Dado um objeto que tem uma propriedade "firstName" e uma propriedade "lastName", "addFullNameProperty" adiciona uma propriedade "fullName" cujo valor é uma string com o nome e sobrenome separados por um espaço.

const person = {
  firstName: 'Maria',
  lastName: 'do Bairro'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Maria do Bairro'

*/


