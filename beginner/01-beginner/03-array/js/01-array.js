var lista = ["maca", "pera","laranja"]

console.log( "Lista Full:" );
console.log( lista );

console.log( "Lista - pop:" );
lista.pop();
console.log( lista );

console.log( "Lista push = uva:" );
lista.push("uva");
console.log( lista );

console.log( "Lista - length:" );
console.log( lista.length );

console.log( "Lista - reverse:" );
console.log( lista.reverse() );

console.log( "Lista - toString:" );
console.log( lista.toString() );

console.log( "Lista - get element [0]:" );
console.log( lista[0] );

console.log( "Lista - join:" );
console.log( lista.join("-") );


/* ========================== */

var fruta = { nome: "maça", cor: "vermelha"  }
console.log( "Dicionario :" );
console.log( fruta );

console.log( "Dicionario - nome:" );
console.log( fruta.nome );


/* ========================== */

var frutas = [{ nome: "maça", cor: "vermelha"}, { nome: "uva", cor: "roxa"  } ]
console.log( "Array de Dicionario :" );
console.log( frutas );

console.log( "Array de Dicionario - nome:" );
console.log( frutas[0].nome );
