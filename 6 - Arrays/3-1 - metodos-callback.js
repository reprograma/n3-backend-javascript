/////////////MAP

const arrayMap = [1, 2, 3, 4, 5]

const arraySomada = arrayMap.map(i => i + 5)
console.log(arraySomada)

/////////////FOREACH

const arrayForEach = ["banana", "maçã", "uva", "goiaba"]

arrayForEach.forEach(fruta => console.log(`eu gosto de ${fruta}`))

/////////////FILTER

const idades = [34, 76, 23, 67, 34, 23, 12, 54, 7, 32, 15]

const adultos = idades.filter(idade => idade >= 18)
console.log(adultos)

/////////////SORT

const sortNum = [456, 23, 8786, 656, 987, 54, 1]
const sortString = ["Zelia", "Lucia", "Maria", "Ana", "Flavia"]

console.log(sortNum.sort()) //zoado
console.log(sortString.sort()) //ok

const numOrdenados = sortNum.sort((a, b) => a < b ? -1 : 1)
const stringOrdenados = sortString.sort((a, b) => a < b ? -1 : 1)

console.log(numOrdenados, stringOrdenados)

/////////////REDUCE

const foguetes = [
	{ pais:'Rússia', lancamentos: 32 },
	{ pais:'EUA', lancamentos: 23 },
	{ pais:'China', lancamentos: 16 },
	{ pais:'Europa(?)', lancamentos: 7 },
	{ pais:'Índia', lancamentos: 4 },
	{ pais:'Japão', lancamentos: 3 }
];

console.log(foguetes.reduce((valorPrevio, elemento) => valorPrevio + elemento.lancamentos, 0))

const reduzido = foguetes.reduce(function(valorPrevio, elemento) {
	return valorPrevio + elemento.lancamentos
}, 0)
console.log(reduzido)