// Criando um Array/Vetor com valores

// Usando Colchetes
let modelos = ['Gol', 'Corsa', 'Fusca', 12, true, false, null];
// ou
// Usando o construtor da Classe Array
let marcas = Array('Chevrolet', 'Ford', 'Fiat');

// Criar um Array/Vetor sem valores (ou vazio)
let cores = [];
// ou
let categoria = new Array();

// Exibir o conteúdo
console.log(modelos);
console.log(marcas);
console.log(cores);
console.log(categoria);

// Ele permite limitar ao utilizar essa sintaxe
let clientes = new Array(5);
console.log(clientes);

// Adicionando um elemento após a criação de um vetor/array ilimitada

// Adicionando no fim do vetor
marcas.push('Jeep');

// Adicionando no início do vetor
marcas.unshift('VW');
console.log(marcas);

// Removendo o último elemento
marcas.pop();
console.log(marcas);

// Removendo o primeiro elemento
marcas.shift();
console.log(marcas);

// Selecionando e copiando uma parte do vetor
let frutas = ['Laranja', 'Melancia', 'Kiwi', 'Uva', 'Manga'];
let legumes = ['Batata', 'Cenoura', 'Milho'];

let feira = frutas.concat(legumes);
console.log(feira);

// Copiando uma parte do vetor
let frutas_sel = frutas.slice(1, 4);
console.log(frutas_sel);

// Modificando uma parte do vetor
let frutas_c = frutas.splice(1, 1, "Manga"); // Remover 'Melancia' e adicionar 'Manga'
console.log(frutas_c); // Exibe o que foi removido

// Localizar elementos
let situacao = frutas.includes("Caju");
console.log(situacao);

// Unificando elementos a um texto separado por vírgulas
let texto = frutas.join('\n'); // Usando nova linha entre os elementos
let texto2 = frutas.join(', '); // Usando vírgula e espaço
let texto3 = frutas.join('- '); // Usando hífen seguido de espaço

console.log(texto);
console.log(texto2);
console.log(texto3);

// Tabuada 
let mult = 2; // Defina a variável mult (por exemplo, 2)
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tabuada = numeros.map(x => x * mult);
console.log(tabuada);

// Filter 
let pares = numeros.filter(x => x % 2 === 0);
console.log(pares);

// Find
let loc = numeros.find(x => x > 5);
console.log(loc);

console.log(return_index)

let return_some = numeros.some(x=> x>11)
console.log(return_some)
let return_every = numeros.every(x=> x>11)
console.log(return_every)