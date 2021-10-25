const soma = () => {

    let soma = 0;
    for (let i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1,2,3,4,5));

// O Arguments é um array interno de uma função, em que é possível pegar os parametros passados para a função e iterar sobre eles realizando alguma operação.