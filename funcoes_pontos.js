let saldo_inicial = ("Digite seu saldo")
let valor_da_compra = ("O valor da compra")
alert(`Uma pessoa deseja fazer uma compra no supermecado mas antes ela olha o saldo bancario`)
prompt(`${saldo_inicial} :`)
alert(`Depois de um certo tempo fazendo a compra ele se direge ao caixa para fazer o pagamento da compra`)
prompt(`${valor_da_compra} :`)
if (`${saldo_inicial} > ${valor_da_compra} `) {
        alert("compra ocorreu corretamente!");
}else if (`${valor_da_compra} <= ${saldo_inicial}`) {
        alert(`compra ocorreu corretamente!`)
}
let primeiro = parseInt(prompt("Digite o primeiro numero: "));
let segundo = parseInt(prompt("Digite o segundo numero: "));
let resultado = primeiro + segundo;
console.log (`${primeiro} "+" ${segundo} = ${resultado}`)

function operaçoes(_n1, _n2){

        alert(`A multiplicação entre dois números é ${_n1*_n2}.`)
    }
    
    _n1 = parseInt(prompt("Digite um número"))
    _n2 = parseInt(prompt("Digite outro número"))
    operaçoes(_n1, _n2)
    
    Math.pow (4, 2);{ 
    alert(`O expoente é ${Math.pow(4,2)}`) }
    
    for (var i = 0; i < 9; i++) {
        console.log(i);
     }
     alert(`O expoente é ${i}`)
        
