const objt = { a:1, b:2, c:3, d:4, soma(){ return a+b+c; }};
// Stringfy converte um objeto em json meio
console.log(JSON.stringify(objt));
// Note que a função n existe no json, pois o mesmo é formato texto.
// Json.parse transforma um texto em objeto, com isso o nome chave do atributo deve ser declarado com aspas duplas
console.log(JSON.parse('{"a":1,"b":2,"c":3}'));