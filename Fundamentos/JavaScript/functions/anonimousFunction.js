const soma = (a,b) => {
    return a+b;
}

const imprimir = (a,b, op=soma) => {

    console.log(op(a,b));

}

imprimir(3,4, soma);

// Callback é vc passar uma funçao q será chamada quando um evento x acontecer.

