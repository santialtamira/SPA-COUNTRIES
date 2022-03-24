const { Router } = require('express');
const { Activity, Country } = require("../db");
// const { Dog, Temperament } = require("../db");
// Importar todos los routers;

const router = Router();

// Configurar los routers
router.post("/", async (req, res) => {

    const {name, dificulty, duration, season, addedCountries} = req.body;
    let activity = await Activity.create({name, dificulty, duration, season})

    addedCountries && addedCountries.map(async (contryName) =>{
        let pais = await Country.findOne({ where: { name: contryName.trim() } });
        await pais.addActivity(activity);
    })

    res.send("Activity created!");
})

router.get("/", async (req, res) => {
    let allActivities = await Activity.findAll();
    res.send(allActivities);
})



module.exports = router;