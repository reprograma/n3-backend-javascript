# JavaScript

*JavaScript* é uma linguagem de programação client-side. Ela é utilizada para controlar o HTML e o CSS para manipular comportamentos na página.

JavaScript não tem nada a ver com Java!!

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

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
