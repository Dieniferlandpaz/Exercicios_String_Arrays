/*let array 
console.log('a. ', array)

array = null
console.log ('b. ', array)

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c. ',array.length) // 11 quantidade 

let i = 0
console.log('d. ',array[i])//3

array[i+1] = 19
console.log ('e. ', array)

const valor = array[i+6]
console.log ('f. ', valor)*/

/*const frase = prompt ('digite uma frase: ')
console.log(frase.toUpperCase().replaceAll("A", "I"),frase.length)*/


// 1. Faça um programa que permite ao usuário seu nome e seu e-mail. Em seguida, imprima no console a seguinte mensagem
// O email 'emailDoUsuario' foi cadastrado com sucesso. Seja bem -vinda(a), nomeDoUsuario!

/*let nome = prompt ("Digite seu nome: ")
console.log (nome)
let emailDoUsuario = prompt ("Digite seu email: ")
console.log (emailDoUsuario)
console.log( "O e-mail ", emailDoUsuario , "foi cadastrado com sucesso.Seja bem -vinda", nome)*/

/*3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console
d) Peça ao usuário que digite o *índice* de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no console*/
/*resolvendo*/
/*let listaDeTarefas = [prompt('digite sua primeira tarefa: '),prompt('digite sua segunda tarefa: '),prompt('digite sua terceira tarefa: ') ];
console.log(listaDeTarefas)
let indice = prompt('Digite um índice de 0 a 2: ');
listaDeTarefas.splice(indice, 1);
console.log(listaDeTarefas)*/


 /*2 exercicios :
1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, 
faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array*/

/*let frase = prompt('Diga uma frase:' );
frase.trim
alert (frase.split(' ') + '\n' + frase.split('') + '\n' + frase.length)

let arrayDeFrutas = ["Banana","Morango","Abacaxi","Laranja","Ameixa"];
let indice = arrayDeFrutas.indexOf('Abacaxi');
console.log(indice, arrayDeFrutas.length)*/

/*3 exercicios
3. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
Em seguida, siga os passos:
    a) Imprima no console o array completo
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
    seguida por cada uma das comidas, *uma embaixo da outra*.
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
    Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista*/
    /*let comidas = ['Pizza', 'Lasanha', 'X', 'Cuscuz', 'Caviar'];
    alert(comidas[0] + '\n' 
    + comidas[1] + '\n' 
    + comidas[2] + '\n' 
    + comidas[3] + '\n' 
    + comidas[4] + '\n'
    )
    comidas[1] = prompt('Informe sua comida preferida: ')
    console.log(comidas)*/
/*4 exercicios
4. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1*/

/*let num1 = prompt ('Digite numero 1');
let num2 = prompt ('Digite numero 2');
let num3 = prompt ('Digite numero 3');
lista = [num1,num2,num3];
console.log(lista)
lista.reverse();
console.log(lista)*/





   





