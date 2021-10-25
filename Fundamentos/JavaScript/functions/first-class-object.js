// Em JS as funções são chamadas de cidadãos de primeira classe, ou seja a função é tratada como dado.
// High order function

function f1() {
    // caso uma função n possua um return, seu retorno será sempre undefined;
}

// É possivek armazenar uma função em uma variável.
const f2 = function (){}
// Pode armazenar a função em um array;

const array = [f1,f2, function (a,b){return a+b}]

// Pode ser guardada dentro de um objetos
const obj = {}
obj.falar = function () {return 'Opa!'}
console.log(obj.falar())

// Passar uma função como parametro para outra função.
