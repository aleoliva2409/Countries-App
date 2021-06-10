// const countries = [
//   {
//     id: 1,
//     name: "ale",
//     acts: [
//       {
//         name: "skate",
//         score: 3,
//       },
//       {
//         name: "swing",
//         score: 5,
//       },
//       {
//         name: "sky",
//         score: 9,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "marta",
//     acts: [
//       {
//         name: "run",
//         score: 5,
//       },
//       {
//         name: "swing",
//         score: 2,
//       },
//       {
//         name: "sky",
//         score: 1,
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "roberto",
//     acts: [
//       {
//         name: "skate",
//         score: 3,
//       },
//       {
//         name: "run",
//         score: 3,
//       },
//       {
//         name: "sky",
//         score: 3,
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "ale",
//     acts: [
//       {
//         name: "run",
//         score: 3,
//       },
//       {
//         name: "basket",
//         score: 3,
//       },
//       {
//         name: "skate",
//         score: 3,
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Don Papi",
//     acts: []
//   }
// ];

// const activities = countries.map(country => {
//   let array = [];

//   if(country.acts[0] === undefined) {
//     return array;
//   }

//   country.acts.forEach(act => {
//     array.push(act.name)
//   })
//   return array;
// })

// console.log(activities.flat())

// let newArray = activities.flat().filter((act,index) => {
//   return activities.flat().indexOf(act) === index
// })

// console.log(newArray)

// // const activities = countries
// //   .map((country) => {
// //     let array = [];

// //     if (country.acts[0] === undefined) {
// //       return array;
// //     }

// //     country.acts.forEach((act) => {
// //       array.push(act.name);
// //     });
// //     return array;
// //   })
// //   .flat()
// //   .filter((act, index) => {
// //     return activities.flat().indexOf(act) === index;
// //   });

// //   console.log(activities)

// console.log([[], [], [], [],].flat())

// const obj1 = {
//     name: "skate",
//     difficulty: 3,
//     duration: 42,
//     season: "spring",
//     countries: [
//         "JAM",
//         "JEY",
//         "KAZ",
//         "COL",
//         "DEU"
//     ]
// }

// const obj2 = {
//     name: "basket",
//     difficulty: 3,
//     duration: 42,
//     season: "spring",
//     countries: [
//         "JAM",
//         "JEY",
//         "KAZ",
//         "COL",
//         "AFG"
//     ]
// }

// const obj3 = {
//     name: "skate",
//     difficulty: 3,
//     duration: 42,
//     season: "spring",
//     countries: [
//         "JAM",
//         "JEY",
//         "KAZ",
//         "PER",
//         "COL",
//         "ARG"
//     ]
// }

// const obj4 = {
//     name: "skate",
//     difficulty: 3,
//     duration: 42,
//     season: "spring",
//     countries: [
//         "ALA",
//         "AND",
//         "COL"
//     ]
// }

// const obj5 = {
//     name: "swim",
//     difficulty: 3,
//     duration: 42,
//     season: "spring",
//     countries: [
//         "ATG",
//         "AND",
//         "COL",
//         "ARM",
//         "DEU"
//     ]

// }

// const obj6 = {
//     name: "run",
//     difficulty: 3,
//     duration: 42,
//     season: "spring",
//     countries: [
//         "ATG",
//         "AND",
//         "COL",
//         "ARM",
//         "GER",
//         "BOL"
//     ]
// }

// export const postear = async (obj)  => {
//   await axios.post("http://localhost:3001/activity" , obj)

//   return obj
// }

// const obj = {
//   obj1: postear(obj1),
//   obj2: postear(obj2),
//   obj3: postear(obj3),
//   obj4: postear(obj4),
//   obj5: postear(obj5),
//   obj6: postear(obj6)
// }

// postActivity

const countries = [
  {
    id: 1,
    name: "ale",
    acts: [
      {
        name: "skate",
        score: 3,
      },
      {
        name: "swing",
        score: 5,
      },
      {
        name: "sky",
        score: 9,
      },
    ],
  },
  {
    id: 2,
    name: "marta",
    acts: [
      {
        name: "run",
        score: 5,
      },
      {
        name: "swing",
        score: 2,
      },
      {
        name: "sky",
        score: 1,
      },
    ],
  },
  {
    id: 3,
    name: "roberto",
    acts: [
      {
        name: "skate",
        score: 3,
      },
      {
        name: "run",
        score: 3,
      },
      {
        name: "sky",
        score: 3,
      },
    ],
  },
  {
    id: 4,
    name: "ale",
    acts: [
      {
        name: "run",
        score: 3,
      },
      {
        name: "basket",
        score: 3,
      },
      {
        name: "skate",
        score: 3,
      },
    ],
  },
  {
    id: 7,
    name: "Don Papi",
    acts: [],
  },
];

const filtrado = countries.map((country) => {
  let array = [];
  country.acts.map(act => {
    if(act.name === "skate"){
      array.push(country)
    }
  })
  return array;
}).flat();

console.log(filtrado)



