require('dotenv').config();
const { leerInput, pausa, inquirerMenu } = require("./helpers/inquirer");
const { mostrarMenu } = require("./helpers/mensajes");
const Busquedas = require('./models/busquedas');

console.log(process.env);

const main = async() => {

  const busquedas= new Busquedas();
    let opt;

    do {
      opt = await inquirerMenu();
       
      switch (opt) {
        case 1:
          //mostrar mensaje
          const lugar = await leerInput('Ciudad: ');
          await busquedas.ciudad(lugar);
          //buscar los lugares
          //seleccionar el lugar
          //Clima
          //mostrar resultados
          console.log('\nInformacion del lugar\n'.green);
          console.log('Ciudad:', );
          console.log('Lat:', );
          console.log('Lng:', );
          console.log('Temperatura:', );
          console.log('Minima:', );
          console.log('Máxima:', );
        break;
      }



      if(opt !== 0) await pausa();
    } while (opt!==0);

   

}

//main();