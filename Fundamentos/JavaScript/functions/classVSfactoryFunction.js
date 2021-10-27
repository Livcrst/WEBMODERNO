class Pessoa{
    // Isso é uma classe em JavaScript
    constructor(name){
        this.name = name;
    }

    falar(){
        console.log(`Meu nome é ${this.name}`);
    }
}

const p1 = new Pessoa('Lívia');
p1.falar();


// Desafio da função construtora