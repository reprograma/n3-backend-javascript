const cartao = "4556993097063271"
const cartaoArray = [4,5,5,6,9,9,3,0,9,7,0,6,3,2,7]

const cartaoConvertido = cartao.split('')
const cartaoParseado = cartaoConvertido.map(function(i) {
	return parseInt(i)
})

const digitoVerificador = cartaoParseado.pop()

const lalala = cartaoParseado.reverse()
console.log(lalala)

const numerosMultiplicados = lalala.map(function(i, indice) {
	if (indice % 2 === 0) {
		i *= 2
		if (i > 9) {
			return i -= 9
		}
		return i
	}
	return i
})

console.log(numerosMultiplicados)

const numeroFinal = numerosMultiplicados.reduce(function(acum, atual) {
	return acum + atual
}, 0)

console.log(numeroFinal + digitoVerificador)

/////////////MAP

// const arrayMap = [666, 333, 555, 888, 234]

// const arraySomada = arrayMap.map(function(banana, xuxu){
// 	return "indice" + "   " + xuxu + "   " + banana
// })
// console.log(arraySomada)

/////////////FOREACH

// const arrayForEach = ["banana", "maçã", "uva", "goiaba"]

// arrayForEach.forEach(function(fruta){
// 	console.log("eu gosto de " + fruta)
// })

/////////////FILTER

// const idades = [34, 76, 23, 67, 34, 23, 12, 54, 7, 32, 15]

// const adultos = idades.filter(function(idade){
// 	return idade >= 18
// })
// console.log(adultos)

/////////////SORT


// console.log(sortNum.sort()) //zoado
// console.log(sortString.sort()) //ok

// const sortNum = [456, 23, 8786, 656, 987, 54, 1]
// const sortString = ["Zelia", "Lucia", "Maria", "Ana", "Flavia"]

// const numOrdenados = sortNum.sort(function(a, b) {
// 	if(a < b){
// 		return -1
// 	} else {
// 		return 1
// 	}
// })
// const stringOrdenados = sortString.sort((a, b) => a < b ? -1 : 1)

// console.log(numOrdenados, stringOrdenados)

/////////////REDUCE

// const foguetes = [
// 	{ pais:'Rússia', lancamentos: 32 },
// 	{ pais:'EUA', lancamentos: 23 },
// 	{ pais:'China', lancamentos: 16 },
// 	{ pais:'Europa(?)', lancamentos: 7 },
// 	{ pais:'Índia', lancamentos: 4 },
// 	{ pais:'Japão', lancamentos: 3 }
// ];

// console.log(foguetes.reduce((valorPrevio, elemento) => valorPrevio + elemento.lancamentos, 0))

// const reduzido = foguetes.reduce(function(valorPrevio, elemento) {
// 	return valorPrevio + elemento.lancamentos
// }, 0)
// console.log(reduzido)