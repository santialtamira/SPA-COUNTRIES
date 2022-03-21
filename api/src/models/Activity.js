const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activity', {
        name: {
            type: DataTypes.STRING,
            
        },
        dificulty: {
            type: DataTypes.INTEGER,
            validate: {
                between1And5(value){
                    if(parseInt(value) < 1 || parseInt(value) > 5){
                        throw new Error("Only numbers between 1 and 5 are allowed.")
                    }
                }
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            
        },
        season: {
            type: DataTypes.ENUM('summer', 'autumn', 'winter', 'spring'),
        },
    });
};
