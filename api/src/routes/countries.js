// import fetch from "node-fetch";
// const {fetch} = require("node-fetch")
const axios = require('axios');
const { Router } = require('express');
const { Country, Activity } = require("../db");


// Importar todos los routers;

const router = Router();

// Configurar los routers
router.get("/", async (req, res) => {

    let allCountries = await Country.findAll()
    if(allCountries.length < 1){

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
                let allTheCountries = await Country.findAll()
                return allTheCountries;
                }, 
                err => console.log("entré all error handler para traer todos los paises"))
            .then(data => res.send(data), err => console.log(err))
            .catch(function (error) {
                console.log(error);
            });    
    }else{
        function isNotEmpty(obj) {
            return Object.keys(obj).length !== 0;
        }
    
        if(isNotEmpty(req.query)){
            const {q} = req.query;
            filteredCountries = allCountries.filter(country => country.name.toUpperCase().includes(q.toUpperCase()) )
            allCountries = filteredCountries;
        }
        res.send(allCountries);
    }
});

router.get("/byActivity", async (req, res) => {
    const { activ } = req.query;
    
    let foundCountries = await Country.findAll({ 
        include: [{
        model: Activity,
        where: {name: activ}
        }],
    });

    res.send(foundCountries);
})

router.get("/:idPais", async (req, res) => {
    const { idPais } = req.params;
    let foundCountry = await Country.findOne({ 
        where: { id: idPais.trim() } 
        , 
        include: [{
        model: Activity,
        through: {
            attributes: []
            }
        }]
    });

    res.send(foundCountry);
})

module.exports = router;
