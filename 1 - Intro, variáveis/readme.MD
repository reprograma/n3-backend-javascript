# JavaScript

*JavaScript* é uma linguagem de programação client-side. Ela é utilizada para controlar o HTML e o CSS para manipular comportamentos na página.

Página HTML:

    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <title>Título</title>
        <meta charset="utf-8">
      </head>
      <body>
 
      </body>
    </html>


Script:

    <script type="text/javascript">
      alert('Hello World!');
    </script>


## Adicionando JavaScript à página

**1.** Inserindo códigos na própria página (inline):

Cria-se uma tag <script>, informando que o valor do atributo 'type' é 'text/javascript', então, coloca-se o código JavaScript dentro dessa tag.

Exemplo:

    <script type="text/javascript">
      alert('Hello World!');
    </script>


**2.** Relacionando um arquivo externo na página:

Exemplo 1 - adicionando um JavaScript do nosso projeto:

    <script type="text/javascript" src="js/script.js"></script>

Exemplo 2 - adicionando um JavaScript da internet:

Nesse exemplo, é carregado o framework JavaScript jQuery disponibilizado pela Google por um serviço de hospedagem de libraries (bibliotecas) JavaScript. Disponível em https://developers.google.com/speed/libraries/devguide?hl=pt-br#jquery:

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>


## Comentários no código

    // comentário de uma linha
 
    /* isto é um comentário longo
       de múltiplas linhas.
    */

## Variáveis

Uma variável referencia a um espaço na memória do computador utilizado para guardar informações que serão usadas em seus programas. Você usa variáveis como nomes simbólicos para os valores em sua aplicação. O nome das variáveis, chamados de identificadores, obedecem determinadas regras.

Um identificador JavaScript deve começar com uma letra, underline (_), ou cifrão ($); os caracteres subsequentes podem também ser números (0-9). Devido JavaScript ser case-sensitive, letras incluem caracteres de "A" a "Z" (maiúsculos) e caracteres de "a" a "z" (minúsculos).

Alguns nomes não podem ser utilizados para criação de variáveis pois estão reservados de alguma forma pela linguagem. São eles:

- __abstract__, __boolean__, __break__, __byte__, __case__, __catch__, __char__, __class__, __const__, __continue__, __default__, __do__, __double__, __else__, __extends__, __false__, __final__, __finally__, __float__, __for__, __function__, __goto__, __if__, __implements__, __import__, __in__, __instanceof__, __int__, __interface__, __long__, __native__, __new__, __null__, __package__, __private__, __protected__, __public__, __return__, __short__, __static__, __super__, __switch__, __synchronized__, __this__, __throws__, __transient__, __true__, __try__, __var__, __void__, __while__, __with__

### Declaração

Existem três tipos de declarações em JavaScript.

var - Declara uma variável, opcionalmente, inicializando-a com um valor.

let - Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.

const - Declara uma constante de escopo de bloco, apenas de leitura.

Você pode declarar uma variável de três formas:

- Com a palavra chave var. Por exemplo, var x = 42. Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.
- Por simples adição de valor. Por exemplo, x = 42. Isso declara uma variável global. Essa declaração gera um aviso de advertência no JavaScript. Você não deve usar essa variante.
- Com a palavra chave let. Por exemplo, let y = 13. Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco.

__Por que const não aparece no bloco acima?__

### Variáveis Globais

Variáveis globais são propriedades do objeto global. Em páginas web o objeto global é a window, assim você pode configurar e acessar variáveis globais utilizando a sintaxe window.variavel. 

### Constantes

Você pode criar uma constante apenas de leitura por meio da palavra-chave const. A sintaxe de um identificador de uma constante é semelhante ao identificador de uma variável: deve começar com uma letra, sublinhado ou cifrão e pode conter caractere alfabético, numérico ou sublinhado.

    const PI = 3.14;

Uma constante não pode alterar seu valor por meio de uma atribuição ou ser declarada novamente enquanto o script está em execução. Deve ser inicializada com um valor.

As regras de escopo para as constantes são as mesmas para as váriaveis let de escopo de bloco. Se a palavra-chave const for omitida, presume-se que o identificador represente uma variável.

### Valores

Uma variável declarada usando a declaração var ou let sem especificar o valor inicial tem o valor  undefined.

    var a;
    console.log("O valor de a é " + a); // saída "O valor de a é undefined"

O valor undefined converte-se para NaN quando usado no contexto numérico.

    var a;
     console.log(a + 2);  // Avaliado como NaN

A propriedade global NaN é um valor especial que significa Not-A-Number (não é um número).

Quando você avalia uma variável nula, o valor nulo se comporta como 0 em contextos numéricos e como falso em contextos booleanos.

    var n = null;
    console.log(n * 32); // a saída para o console será 0.