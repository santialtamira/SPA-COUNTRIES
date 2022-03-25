import { useState } from "react";
import { connect } from "react-redux";
import { loadFilteredCountriesByName } from "../../actions";
import s from "./Search.module.css";

function mapStateToProps(state) {
    return {
        allCountries: state.allCountries,
    };
}

function Search(props){

    let [userInput, setUserInput] = useState("");

    function onChangeHandler(event){
        setUserInput(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        // console.log("DESDE SEARCH HACIA ACTIONS", props.allCountries);
        let filteredCountries = props.allCountries.filter(country => country.name.toUpperCase().includes(userInput.toUpperCase()) );
        // console.log(filteredCountries)
        props.loadFilteredCountriesByName(filteredCountries);
    }

    return(
        <div className={s.containerSearch}>
            <form action="" onSubmit={submitHandler}>
                <input type="text" className={s.selectBox} onChange={onChangeHandler}/>
                <input type="submit" value="Search!" className={s.btnSelect}/>
            </form>
            
        </div>
    )
}
export default connect(mapStateToProps, {loadFilteredCountriesByName})(Search);