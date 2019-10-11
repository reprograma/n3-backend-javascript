const satanas = {
  nome: 'Satanás',
  idade: 6,
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


// console.log(gatos)

//ITERANDO COM FOR OF

// for (let gato of gatos) {
  //   if (gato.castrado) {
    //     console.log(gato.nome)
    // 	}
    // }
    
    // const gatos = [satanas, churrumina, odo, ford]
    // gato {
      //   nome: "xuxu"
      //   cores: ["cor1", "cor2"]
      // }
      
      // for (let gato of gatos) {
        //     console.log(gato.nome)
        //   for (let cor of gato.cores) {
          //     console.log(cor)
          //   }
          // }
          
          //ITERANDO COM FOR IN
            const ford = {
              nome: 'Ford Prefect',
              idade: 3,
              castrado: true,
              cores: ['rajado']
            };
          
          // for (let caracteristica in ford){
          //   console.log(caracteristica, ford[caracteristica])
          // }
          
          //alterando objetos:
          
          const pessoa = {
            nome: "Juliana",
            idade: 38,
            gatos: ["Satanás"],
          }
          
          // console.log(pessoa)
          pessoa.cabelo = "azul"
          // console.log(pessoa)
          
          pessoa.gatos.push("Churrumina")
          console.log(pessoa)
          
          /*
// imprimir lista de cores por gato, no formato
// nome do gato
//cor
//-------------
*/


