const satanas = {
  nome: 'Satanás',
  idade: 6, //data de nascimento!
  castrado: true,
  cores: ['preto', 'branco']
};

const churrumina = {
  nome: 'Churrumina',
  idade: 1,
  castrado: true,
  cores: ['branca', 'creme', 'cinza']
};

const odo = {
  nome: 'Odo',
  idade: 2,
  castrado: true,
  cores: ['branco', 'marrom', 'preto']
};

const ford = {
  nome: 'Ford Prefect',
  idade: 3,
  castrado: true,
  cores: ['rajado']
};

const gatos = [satanas, churrumina, odo, ford]

//ITERANDO COM MÉTODOS ES6

// const output1 = gatos.map(gato => console.log(gato))
// const output2 = gatos.map(gato => console.log(gato.nome)) 

// const output3 =  gatos.filter(gato => gato.castrado === true)
// console.log(output3)

// const output4 = gatos.filter(gato => gato.cores.includes('preto'))
// console.log(output4.map(gato => gato.nome))

// imprimir lista de cores por gato, no formato
// nome do gato: xxxxx - cores do gato: xxxxx
