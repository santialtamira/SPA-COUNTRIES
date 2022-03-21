const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false, //defaultValue; autoIncrement; unique;
    },
    imgFlag:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subRegion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
    },
  });
};



// [ ] Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)

// [ ] Los campos mostrados en la ruta principal para cada país 
// [ ] Área (Mostrarla en km2 o millones de km2)
// [ ] Actividades turísticas con toda su información asociada