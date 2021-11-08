// Usando a notação literal 

const ob1 = {}

// Objeto no JavaScript

const obj2 = new Object; // Funçao construtora e o operador new.


// Função Factory :: Função que retorna um objeto.
function Produto (nome, preco, desc) {
    this.nome = nome;
    // uma função ela pode ser publica ou privada, sendo possivel acessa-la fora do escopo da função, fazendo uso do this.
    this.getPrecoComDesconto =  () => {

        return preco*(1-desc)

    }
}


const funcionario = (nome, salario, faltas) => {

    return {
        nome,
        salario, 
        faltas,
        getSalario (){
            return (salario/30)*(30-faltas);
        }
    }

}

// É possivel criar um objeto por meio de Object.create ()


const filha = Object.create(null);

