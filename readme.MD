# JavaScript

*JavaScript* � uma linguagem de programa��o client-side. Ela � utilizada para controlar o HTML e o CSS para manipular comportamentos na p�gina.

JavaScript n�o tem nada a ver com Java!!

P�gina HTML:
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <title>T�tulo</title>
        <meta charset="utf-8">
      </head>
      <body>
 
      </body>
    </html>


Script:
   <script type="text/javascript">
     alert('Hello World!');
   </script>


## Adicionando JavaScript � p�gina

*1.* Inserindo c�digos na pr�pria p�gina (inline):

Cria-se uma tag <script>, informando que o valor do atributo 'type' � 'text/javascript', ent�o, coloca-se o c�digo JavaScript dentro dessa tag.

Exemplo:
   <script type="text/javascript">
     alert('Hello World!');
   </script>

*2.* Relacionando um arquivo externo na p�gina:

Exemplo 1 - adicionando um JavaScript do nosso projeto:

Imagine que o projeto est� com a seguinte estrutura de diret�rios:

projeto/
 |index.html
 |js/
  |script.js

Assim, se queremos que a p�gina 'index.html' carregue o arquivo 'js/script.js', utilizamos a seguinte marca��o:

    <script type="text/javascript" src="js/script.js"></script>

Exemplo 2 - adicionando um JavaScript da internet:

Nesse exemplo, � carregado o framework JavaScript jQuery disponibilizado pela Google por um servi�o de hospedagem de libraries (bibliotecas) JavaScript. Dispon�vel em https://developers.google.com/speed/libraries/devguide?hl=pt-br#jquery:

    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">