// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.


// Capital (C) = R$ 1.200

// Tempo (t) = 14 meses

// Taxa (i) = 2% ao mês = 2/100 = 0,02

// J = C × i × t


const simples = (capital, taxa, aplications) =>{

    let saldo;

    if(taxa >= 1){
      saldo = capital*(taxa/100)*aplications;
      console.log('aqui no if');
    }
    else{
      saldo = capital*taxa*aplications;
      console.log('aqui no else');
    }

    return saldo.toFixed(0);
    
}

console.log(simples(1200,2,14));

// M = C × (1 + i)n
// J = M - C

// const compostos = (capital, taxa, aplications) => {

//     let montante ;

//     if (taxa >= 1){

        


//     }


// }