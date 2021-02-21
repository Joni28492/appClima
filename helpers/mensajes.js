const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const mostrarMenu = () => {
    console.clear();

console.log('=======================');
console.log('  Selecciona una opcion');
console.log('=======================');



}

module.exports={
    mostrarMenu
}