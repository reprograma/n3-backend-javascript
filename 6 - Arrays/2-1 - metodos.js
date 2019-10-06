const arr = [1, 2, 3, 4, 5];

//retorna o tamanho da array
arr.length //5

// remove o último elemento de um array e retorna aquele valor
arr.pop() //[ 1, 2, 3, 4 ]

// adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
arr.push(5)

// inverte os itens de um array. 
arr.reverse()

// remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. 
arr.shift()

// adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
arr.unshift(5)

// retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
const temNaArray = arr.indexOf(8)

console.log(arr, temNaArray)z

//////////////////////////////////////////

// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
const arrSplice = [12, 34, 56, 78, 90];

let removido = arrSplice.splice(2, 0, "cheguei");
console.log(arrSplice, removido)

removido = arrSplice.splice(3,1);
console.log(arrSplice, removido)

removido = arrSplice.splice(2, 2, "perdeu");
console.log(arrSplice, removido)

removido = arrSplice.splice(2, 2, 555, 666, 777);
console.log(arrSplice, removido)

//////////////////////////////////////////

// O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início(begin) e fim(end)(fim não é necessário) de um array original. O Array original não é modificado.

const maisUmaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("slice", maisUmaArray.slice(0));
console.log("slice", maisUmaArray.slice(1));
console.log("slice", maisUmaArray.slice(2));
console.log("slice", maisUmaArray.slice(-1));
console.log("slice", maisUmaArray.slice(0, 2));
console.log("slice", maisUmaArray);

console.log(maisUmaArray.indexOf(13));

//////////////////////////////////////////

// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro

var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];

console.log(array1.concat(array2));

//////////////////////////////////////////

// O método join() junta todos os elementos de uma array (ou um array-like object) em uma string e retorna esta string.

var pokemon = ["Pikachu", "Bulbassauro", "Charizard", "Squirtle", "Toguepi", "Meowth"];

console.log(pokemon.join());
console.log(pokemon.join(''));
console.log(pokemon.join('-'));

//////////////////////////////////////////

// O método split() divide um objeto String em um array de strings ao separar a string em substrings.

let frase = "Um pequeno jabuti xereta viu dez cegonhas felizes";

let palavras = frase.split(' ');
console.log(palavras[3]);

let chars = frase.split('');
console.log(chars[8]);

let fraseCopy = frase.split();
console.log(fraseCopy);