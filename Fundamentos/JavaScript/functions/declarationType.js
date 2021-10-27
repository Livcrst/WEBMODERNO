// Function declaration

function soma (x,y){
    return x+y;
}

// Function expression
const sub = function (x,y){
    return x-y;
}

// Named function expression

const mult = function mult (x,y){
    return x*y;
}


// Closures é o escopo criado quando uma função é declarada;
// Esse escopo permite a função acessar e manipular variáveis externas á função.

// Função Factory é uma função que retorna um objeto

const factory = (name, age ) =>{
    return {
        nome: name,
        idade: age
    }
}

console.log( factory('Lívia', 22));