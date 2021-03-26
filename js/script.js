function minor(array) {
   
   let lightBike = {

      'name': '',
      'weight': Number.MAX_SAFE_INTEGER
   }

   

   for (let i = 0; i < array.length; i++) {
      const Elem = array[i];

      const { weight } = Elem;

      if (weight < lightBike.weight) {
         
         lightBike = Elem;
      }
   }
   
   return lightBike;
}

function es1() {
   
   // Creare un array di oggetti: ogni oggetto descriverà 
   // una bici da corsa con le seguenti proprietà: nome e peso. 
   // Stampare a schermo la bici con peso minore.

   let bikes = [

      {
         'name': 'bike1',
         'weight': 5
      },
      {
         'name': 'bike2',
         'weight': 3
      },
      {
         'name': 'bike3',
         'weight': 21
      },
      {
         'name': 'bike4',
         'weight': 10
      },
   ];

   let lightBike = minor(bikes);
   console.log(`La bici più leggera è la ${lightBike.name}, pesante ${lightBike.weight} kg.`);
}

function init() {
   
   es1()
}

$(document).ready(init);