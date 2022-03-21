const { Router } = require('express');
// const { Dog, Temperament } = require("../db");
// Importar todos los routers;

const router = Router();

// Configurar los routers
router.get("/", async (req, res) => {
    // let allDogs = await Dog.findAll({include: [{
    //     model: Temperament,
    //     attributes: ['name'],
    //     through: {
    //         attributes: []
    //         }
    //     }]
    // });

    // function isNotEmpty(obj) {
    //     return Object.keys(obj).length !== 0;
    // }

    // if(isNotEmpty(req.query)){
    //     const {q} = req.query;
    //     filteredDogs = allDogs.filter(dog => dog.dataValues.name.includes(q))
    //     allDogs = filteredDogs;
    // }
    res.send("Todas las activities");
})

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