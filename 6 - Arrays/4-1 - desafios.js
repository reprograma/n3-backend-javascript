// Três desafios para fixarmos nosso aprendizado de arrays. Escolha pelo menos dois!
// Todos podem ser resolvidos utilizando tanto o for clássico quanto os métodos modernos com callbacks. Tente fazer e depois refatorar seu código!

////////////////////////////

/* VALIDAÇÃO DE CARTÃO DE CRÉDITO (ALGORITMO DE LUHN)

Nesse exercício, você fará a validação de números de cartão de crédito utilizando o algoritmo de Luhn:

1) Retire o último dígito do número. Ele é o verificador;
2) Escreva os números na ordem inversa;
3) Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
4) Some todos os números;
5) O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados pra obter um módulo 10.
6) O cartão será válido se os números somados % 10 === 0.
*/

////////////////////////////

/* VALIDAÇÃO DE CPF

O algoritmo de validação do CPF calcula o primeiro dígito verificador a partir dos 9 primeiros dígitos do CPF, e em seguida, calcula o segundo dígito verificador a partir dos 9 primeiros dígitos do CPF, mais o primeiro dígito, obtido na primeira parte.

** Validação do primeiro dígito:

Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 à 2 e soma os resultados.
	const verificadorUm =	(n * 10) + (n * 9) + (n * 8) + (n * 7) + (n * 6) + (n * 5) + (n * 4) + (n * 3) + (n * 2)

	O próximo passo da verificação também é simples, basta multiplicarmos esse resultado por 10 e dividirmos por 11.

    (verificadorUm * 10) / 11

O resultado que nos interessa na verdade é o RESTO da divisão. Se ele for igual ao primeiro dígito verificador (primeiro dígito depois do '-'), a primeira parte da validação está correta.
Observação Importante: Se o resto da divisão for igual a 10, nós o consideramos como 0.

** Validação do segundo dígito:

Semelhante à primeira, porém agora considera-se os 9 primeiros dígitos, mais o primeiro dígito verificador, e multiplica-se os 10 números pela sequência decrescente de 11 a 2.

		const verificadorDois = (n * 11) + (n * 10) + (n * 9) + (n * 8) + (n * 7) + (n * 6) + (n * 5) + (n * 4) + (n * 3) + (n * 2)

O restante do processo é o mesmo: verifica-se se o resto de (verificadorDois * 10) / 11 é igual ao segundo dígito verificador.

Se os dois dígitos passarem pela verificação, o número de CPF é válido.
*/

////////////////////////////

/* CIFRA DE CÉSAR

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituída por outra que se encontra a um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (offset) de 3 posições:

    Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
    A letra A será D
    A palavra CASA será FDVD

Seu objetivo é criar uma função que receba 2 parâmetros, a string a ser cifrada e o número de posições deslocadas. Essa função deverá retornar a string cifrada.

Exemplo:

function cypher(string, offset) {
	// seu código aqui
}

cypher("ABC", 1) ==> //"BCD"
 */