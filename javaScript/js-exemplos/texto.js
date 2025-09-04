let text = "Estão chegando as provas";

//imprimi a quantidade de caracter dentro da variavel text, o espaço tambem conta como caracter 
console.log(text.length);

//imprimi a string que esta dentro da variavel text 
console.log(text);

// função replace altera o palavra provas por avaliações, mas não altera a variavel original 
console.log(text.replace("provas", "avaliações"));

//deixa a frase que esta dentro da variavel text em MAIUSCULA.
console.log(text.toUpperCase());

//deixa a frase que esta dentro da variavel text em minuscula.
console.log(text.toLocaleLowerCase());

//retorna a primeira posição na string, "as" provas 
console.log(text.indexOf("as"));

//retonar a ultima posição na string, prov"as"
console.log(text.lastIndexOf("as"));

