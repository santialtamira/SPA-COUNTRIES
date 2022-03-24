import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadAllCountries } from "../../actions";
import Card from "../../Components/Card/Card";
import NavBar from "../../Components/Navbar/NavBar";
import s from "./AllCountries.module.css";
import Paginator from "../../Components/Paginator/Paginator.jsx";


function mapStateToProps(state) {
    return {
        allCountries: state.allCountries,
    };
}

function AllCountries(props){

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(8);
    const startFromIndex = (currentPage * cardsPerPage) - cardsPerPage;
    const endAtIndex = (currentPage * cardsPerPage);
    const cardsToShowAtThisPage = props.allCountries.slice(startFromIndex, endAtIndex);

    useEffect(()=>{
        // Si no hay ningún country en el store, reviso la base de datos.
        if(props.allCountries.length < 1){

            fetch("http://localhost:3001/countries") 
                .then(r => r.json())
                .then((recurso) => {
                    props.loadAllCountries(recurso)
                    return recurso;
                });
        }

    }, []);

    function newPaginator(page){
        setCurrentPage(page);
    }

    return(
        <div className={s.allCountriesContainer}>
            <NavBar></NavBar>
            <div className={s.cardsContainer}>
                {cardsToShowAtThisPage.map(country =>{
                    if(country.name){
                        return <Card name={country.name} imgFlag={country.imgFlag} continent={country.continent} key={country.id} id={country.id}></Card>
                    }
                }
                )}
            </div>
            <Paginator newPaginator={newPaginator} cardsPerPage={cardsPerPage}></Paginator>
        </div>
    )
}

export default connect(mapStateToProps,{loadAllCountries})(AllCountries)
