// * EX #1
function minor(array) {
   
   let lightBike = {

      'name': '',
      'weight': Number.MAX_SAFE_INTEGER
   }

   // VER ES 5
   // for (let i = 0; i < array.length; i++) {
   //    const Elem = array[i];

   //    const { weight } = Elem;

   //    if (weight < lightBike.weight) {
         
   //       lightBike = Elem;
   //    }
   // }

   // VER ES 6
   array.forEach(item => {

      const { weight } = item;

      if (weight < lightBike.weight) {
         
         lightBike = item;
      }
   });
   
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

// - - - - - - - - - - - - - - - - - - - - - - - -

// * EX #2
function getRnd(min, max) {
   
   let intMin = min;
   let intMax = max - min + 1;

   let rnd = Math.floor((Math.random() * intMax) + intMin)

   return rnd;
}

function rndParam(arrayObj) {
   
//    VER ES 5
//    for (let i = 0; i < arrayObj.length; i++) {
//       const Obj = arrayObj[i];
      
//       Obj.points = getRnd(1,60);
//       Obj.gotFouls = getRnd(1,20);
//    }
//    return arrayObj;

//    VER ES 6
   arrayObj.forEach(item => {

      item.points   = getRnd(1,60);
      item.gotFouls = getRnd(1, 20);
   });

   return arrayObj;
}

function noPoints(arrayObj, newArrayObj) {
   
   // VER ES5 / ES6
   // for(let i = 0; i < arrayObj.length; i++){
      
   //    let Obj = arrayObj[i];
   
   //    const { name, gotFouls } = Obj;
   
   //    Obj = { name, gotFouls };
   
   //    newArrayObj.push(Obj);
   // }

   // VER ES6
   arrayObj.forEach(item => {

      const { name, gotFouls } = item;

      item = { name, gotFouls };

      newArrayObj.push(item);
   });

   return newArrayObj;
}

function es2() {
   
   // Creare un array di oggetti di squadre di calcio. 
   // Ogni squadra avrà diverse proprietà: 
   // nome, punti fatti, falli subiti.
   // Nome sarà l'unica proprietà da compilare, 
   // le altre saranno tutte settate a 0.

   let teams = [

      {
         'name'    : 'Team1',
         'points'  : '0',
         'gotFouls': '0'
      },
      {
         'name'    : 'Team2',
         'points'  : '0',
         'gotFouls': '0'
      },
      {
         'name'    : 'Team3',
         'points'  : '0',
         'gotFouls': '0'
      },
      {
         'name'    : 'Team4',
         'points'  : '0',
         'gotFouls': '0'
      }
   ];

   // Generare numeri random al posto degli 0 nelle proprietà:
   // punti fatti e falli subiti   

   teams = rndParam(teams);

   // console.log(teams);

   // Usando la destrutturazione creiamo un nuovo array 
   // i cui elementi contengono solo nomi e falli subiti 
   // e stampiamo tutto in console.

   let newTeams = [];

   noPoints(teams, newTeams);

   console.log(newTeams);
}

// - - - - - - - - - - - - - - - - - - - - - - - -

// * EX #3

function betweenValue(array, a, b,) {
   
   const newArray = array.filter((item, index) => {

      if (index > a && index < b) {
         
         return item;
      }
   });
   return newArray;

   // VER #2 filter no arrow-function
   // const newArray = array.filter(function (item, index) {
      
   //    if (index > a && index < b) {
         
   //       return item;
   //    }
   // });
   // console.log(newArray);

   // VER #1 FOREACH
   // const newArray = [];

   // array.forEach((item, index) => {

   //    if (index > a && index < b) {
         
   //       newArray.push(item);
   //    }
   // });

   // console.log(newArray);
}

function es3() {
   
   // Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
   // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
   // Usiamo i nuovi metodi degli array foreach o filter.

   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   let a   = 2;
   let b   = 7;

   const newArray = betweenValue(arr, a, b);

   console.log(newArray);
}


function init() {
   
   // es1()
   // es2();
   es3();
}

$(init);