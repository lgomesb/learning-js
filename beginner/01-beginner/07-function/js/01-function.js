function soma( n1, n2 ) { 
    return n1 + n2;
}

function setReplace( frase, strSearch, strReplace) {
    return frase.replace(strSearch, strReplace);
} 


console.log( soma(5, 10));
console.log( setReplace("Hello World!", "World", "Brazil"));

function validaIdade(idade) {
    var ehMaiorOuMenor; 
    
    if( idade >= 18) {
        ehMaiorOuMenor = "Maior";
    } else {
        ehMaiorOuMenor = "Menor";
    }

    return ehMaiorOuMenor + " de idade";
    
}

var idade = prompt( "Qual sua idade?");

console.log( validaIdade(idade));