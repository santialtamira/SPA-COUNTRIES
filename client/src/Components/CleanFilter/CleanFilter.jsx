import { connect } from "react-redux";
import { loadAllCountries } from "../../actions";
import s from "./CleanFilter.module.css";

function CleanFilters(props){

    function handleClick(e){
        e.preventDefault();
        fetch("http://localhost:3001/countries") 
                .then(r => r.json())
                .then((recurso) => {
                    props.loadAllCountries(recurso)
                    return recurso;
                });
    }

    return(
        <div className={s.containerClean}>
            <button onClick={handleClick} className={s.btn}>Clean Filters</button>
        </div>
    )
}

export default connect(null, {loadAllCountries})(CleanFilters);