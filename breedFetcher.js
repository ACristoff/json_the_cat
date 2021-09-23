const request = require('request');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}
//https://api.thecatapi.com/v1/breeds/search?q=sib

const myBreedSearch = new Promise((resolve, reject) => {
  rl.question("What cat would you like to search for? \n", (catquery) => {
    resolve(catquery);
  });
});

myBreedSearch.then((data) => {
  console.log(`searching for ${data}...`);
  return new Promise((resolve, reject) => {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${data}`, (error, response, body) => {
      if (response === undefined) {
        console.log(`Invalid HTTP address, please correct the URL.`);
        rl.close();
        return;
      }
      const catObj = JSON.parse(body);
      if (catObj[0] === undefined) {
        console.log(`404: cat ${data} not found`);
        rl.close();
        return '404: cat not found';
      }
      console.log(catObj[0].name, 'cat', '\n',catObj[0].description);
      // console.log(catObj, data)
      // resolve (catObj[0].breeds[0].description)
      rl.close();
    });
  });
});

// if (response.statusCode !== 200) {
//   console.log(`Invalid HTTP address, please correct the URL. Error code: ${response.statusCode}`)
//   return
// }

// const prompcats = () => {
//   return new Promise((resolve, rejectr) => {
//     rl.question("What cat would you like to search for? \n", (catquery) => {
//       resolve(catquery)
//     })
//   });
// }

// const prompcatsRecursive = () => {
//   prompcats().then((data) => {
//     console.log(`searching for ${data}...`);
//     return new Promise((resolve, reject) => {
//       request(`https://api.thecatapi.com/v1/images/search?breed_ids=${data}`, (error, response, body) => {
//         const catObj = JSON.parse(body)
//         console.log(catObj[0].breeds[0].description)
//         resolve (catObj[0].breeds[0].description)
//       })
//     })
//   }).then(() => {
//     return prompcats()
//   })
// }

// prompcatsRecursive();

// let breed_id = 'mcoo'

// const fetchRequest = request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}`, (error, response, body) => {
//   const catObj = JSON.parse(body)
//   console.log(catObj[0].breeds[0].description)
//   // return catObj[0].breeds[0].description
  
//   // console.log(body)
// })


// // rl.question("What cat would you like to search for? \n", (catquery) => {
// //   console.log('You have searched for: ', catquery)
// //   // breedSearch(catquery)
// //   return catquery
// // }).then(() => {
// //   console.log('then this')
// // })

// let breed_id = 'mcoo'

// const breedSearch = (`https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}`, (error, response, body) => {

//   // if (error) {
//   //   return "error has occured:", error
//   // }
//   console.log(body)
//   const catObj = JSON.parse(body)
//   console.log(catObj[0].breeds[0].description)
//   // console.log(body)
// })

// breedSearch()



// // function promptCountry() {
// //   return new Promise((resolve, reject) => {
// //     rl.question("What country do you want information for?", (answer) => {
// //       resolve(answer);
// //     });
// //   })
// //     .then((country) => {
// //       return ;
// //     }) }


// //https://api.thecatapi.com/v1/images/search?breed_ids={breed-id}

// //mcoo

// // const obj = JSON.parse(jsonString);
// // [{"breeds":[{"weight":{"imperial":"12 - 18","metric":"5 - 8"},"id":"mcoo","name":"Maine Coon","cfa_url":"http://cfa.org/Breeds/BreedsKthruR/MaineCoon.aspx","vetstreet_url":"http://www.vetstreet.com/cats/maine-coon","vcahospitals_url":"https://vcahospitals.com/know-your-pet/cat-breeds/maine-coon","temperament":"Adaptable, Intelligent, Loving, Gentle, Independent","origin":"United States","country_codes":"US","country_code":"US","description":"They are known for their size and luxurious long coat Maine Coons are considered a gentle giant. The good-natured and affable Maine Coon adapts well to many lifestyles and personalities. She likes being with people and has the habit of following them around, but isn’t needy. Most Maine Coons love water and they can be quite good swimmers.","life_span":"12 - 15","indoor":0,"lap":1,"alt_names":"Coon Cat, Maine Cat, Maine Shag, Snowshoe Cat, American Longhair, The Gentle Giants","adaptability":5,"affection_level":5,"child_friendly":4,"dog_friendly":5,"energy_level":3,"grooming":3,"health_issues":3,"intelligence":5,"shedding_level":3,"social_needs":3,"stranger_friendly":5,"vocalisation":1,"experimental":0,"hairless":0,"natural":1,"rare":0,"rex":0,"suppressed_tail":0,"short_legs":0,"wikipedia_url":"https://en.wikipedia.org/wiki/Maine_Coon","hypoallergenic":0,"reference_image_id":"OOD3VXAQn"}],"id":"ftmw29QPb","url":"https://cdn2.thecatapi.com/images/ftmw29QPb.jpg","width":1024,"height":768}]
