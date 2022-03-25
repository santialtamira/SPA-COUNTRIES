import { connect } from "react-redux";
import { loadAllActivities, loadFilteredCountriesByActivity, loadAllCountries } from "../../actions";
import { useEffect } from "react";
import s from "./FilterByActivity.module.css";


function mapStateToProps(state) {
    return {
        allCountries: state.allCountries,
        activities: state.activities,
    };
}

function FilterByActivity(props){

    useEffect(()=>{
        fetch(`http://localhost:3001/activities`) 
                .then(r => r.json())
                .then((recurso) => {
                    props.loadAllActivities(recurso);
                    return recurso;
                });
    }, []);
    
    function clickHandler(event){
        event.preventDefault();
        
        let selectedActivity = document.getElementById("selectActivity").value;

        fetch(`http://localhost:3001/countries/byActivity?activ=${selectedActivity}`) 
                .then(r => r.json())
                .then((recurso) => {
                    props.loadAllCountries(recurso);
                    return recurso;
                });
    }

    return(
        <div>
            <form >
                <select name="" id="selectActivity" className={s.selectBox}>
                    {props.activities.map(activity => {
                        return <option key={activity.id} value={activity.name}>{activity.name}</option>
                    }  
                    )}
                </select>
                <input type="submit" value="Filter" onClick={clickHandler} className={s.btnSelect}/>
            </form>
        </div>
    )
}

export default connect(mapStateToProps,{loadFilteredCountriesByActivity, loadAllActivities, loadAllCountries})(FilterByActivity);