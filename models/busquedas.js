const axios = require('axios');



class Busquedas {
    //no hace falta declarar, es con fin educativo
    historial = ['Teguciglpa', 'Madrid', 'San Jose'];

    constructor(){
        //TODO:leer DB si existe
    }

    get paramsMapbox(){
      return {
        'access_token': 'pk.eyJ1Ijoiam9uaWZkZXozZCIsImEiOiJja2xiZ3Iwb3IwZjFwMndwMGcyaHY3bmR5In0.GTXDmcQdaaSw7cxKu4x3JA',
        'limit':5,
        'language': 'es'
      };
    }

    async ciudad(lugar=''){
      try {
        //Peticion http}
        const instance = axios.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            params: this.paramsMapbox
        });

        const resp =await  instance.get();
        console.log(resp.data);
        return []; //retornar los lugares 
      } catch (error) {
        return [];
      }
    }


}


module.exports = Busquedas;