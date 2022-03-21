import { useEffect } from "react"
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        allCountries: state.allCountries,
    };
}

function AllCountries(props){

    // usar un useEffect 
    // primero chequeo si están los paises en el store.
    // si no hay nada en el store, chequeo si hay algo en la base de datos.
    // hago un request a mi servidor. Si el response viene vacio, entonces hago una petición a la appi 
    // y con esa info lleno la base de datos.
    // Si hay algo en el response, entonces renderizo esa info
    useEffect(()=>{
        // Si no hay ningún country en el store, reviso la base de datos.
        if(props.allCountries.length < 1){
            console.log("1- Nada en el SOTRE, revisando BD") //

            const allCountriesDB = fetch("http://localhost:3001/countries") 
                .then(r => r.json())
                .then((recurso) => {
                    console.log("TODOS LOS PAISES DESDE ALLCOUNTRIES",recurso)
                    return recurso;
                });
            

        }





    }, []);

    return(
        <div>
            <h1>Aca se muestran ALL COUNTRIES</h1>
        </div>
    )
}

export default connect(mapStateToProps,{})(AllCountries)

// Primero tengo que trabajar en los modelos.
// luego en las rutas del backend
// Recién ahí puedo retomar con esto.