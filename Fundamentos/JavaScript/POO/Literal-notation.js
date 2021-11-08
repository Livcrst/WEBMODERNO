// Usando a notação literal 

const ob1 = {}

// Objeto no JavaScript

const obj2 = new Object;

// Funções contrutoras para
function Produto (nome, preco, desc) {
    this.nome = nome;
    // uma função ela pode ser publica ou privada, sendo possivel acessa-la fora do escopo da função, fazendo uso do this.
    this.getPrecoComDesconto =  () => {

        return preco*(1-desc)

    }
}