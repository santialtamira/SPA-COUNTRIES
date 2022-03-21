// import fetch from "node-fetch";
// const {fetch} = require("node-fetch")
const axios = require('axios');
const { Router } = require('express');
const { Country } = require("../db");
// Importar todos los routers;

const router = Router();

// Configurar los routers
router.get("/", async (req, res) => {

    let allCountries = await Country.findAll()
    if(allCountries.length < 1){
        console.log("2- Nada en la DB, haciendo llamado a la API") //

        axios.get('https://restcountries.com/v3/all')
            .then( (response) => {
                try {
                    response.data.map( async (country) =>{
                        function makeid() { 
                            var text = ""; 
                            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
                            for( var i=0; i < 3; i++ ){
                                text += possible.charAt(Math.floor(Math.random() * possible.length));
                                return text; 
                            }  
                        }
                        let countryId = makeid();

                        if(!country.name.official) country.name.official = "NO NAME";
                        if(!country.region) country.region = "NO continent";
                        if(!country.capital || country.capital.length !== 1) country.capital = ["NO capital"];
                        if(!country.subRegion) country.subRegion = "NO subRegion";
                        if(!country.area) country.area = 0;
                        if(!country.population) country.population = 0;
                        if(!country.cca3) country.cca3 = countryId;
                        if(!country.flags || country.flags.length !== 2) country.flags = ["pepe","https://www.efemeridesargentina.com.ar/efemeridesargentina/imagenes/fotos/2963.jpg"];
    
                        await Country.create({
                            name: country.name.official, 
                            continent: country.region, 
                            capital: country.capital[0], 
                            subRegion: country.subregion, 
                            area: Math.floor(country.area), 
                            population: country.population, 
                            id: country.cca3, 
                            imgFlag: country.flags[1],
                        })
                        .then( console.log("A"), err => console.log(err))
                    })
                    console.log("terminé el map")
                } catch (error) {
                    console.log(error)
                }
            })
            .then( async (data) => { 
                console.log("entré all succses handler para traer todos los paises")
                let allTheCountries = await Country.findAll()
                console.log("ALL THE COUNTRIES",allTheCountries)
                return allTheCountries;
                }, 
                err => console.log("entré all error handler para traer todos los paises"))
            .then(data => res.send(data), err => console.log(err))
            .catch(function (error) {
                console.log(error);
            });    
    }else{
        console.log("3- a ver el orden..")
        res.send(allCountries);
    }
});

// router.get("/:id", (req, res) => {
//     res.send("Obtener el detalle de una raza de perro en particular");
// })

// router.post("/", async (req, res) =>{
//     console.log("body de post/dogs", req.body)

//     let height = `${req.body.min_height} - ${req.body.max_height}`
//     let weight = `${req.body.min_weight} - ${req.body.max_weight}`
//     let life_span = `${req.body.min_life_span} - ${req.body.max_life_span}`

//     let dog = await Dog.create({ weight: weight, height: height, name: req.body.name, life_span: life_span, image: req.body.image })
    
//     req.body.temperament && req.body.temperament.map(async (temp) =>{
//         const temperamento = await Temperament.findOne({ where: { name: temp.trim() } });
//         await dog.addTemperament(temperamento);
//     })
    
//     res.send("Perro creado")
// })

module.exports = router;