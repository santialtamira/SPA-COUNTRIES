import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { loadCountryDetail } from "../../actions";


function mapStateToProps(state) {
    return {
        allCountries: state.allCountries,
        detail: state.detail,
    };
}

function Detail(props){
    const { id } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3001/countries/${id}`) 
                .then(r => r.json())
                .then((recurso) => {
                    props.loadCountryDetail(recurso);
                    return recurso;
                });
    }, []);

    return(
        <div>
            
            <div>
                <h1>{props.detail.name}</h1>
                <img src={props.detail.imgFlag} alt={`Flag from ${props.detail.name}`} />
                <p>ID: {props.detail.id}</p>
                <p>Capital: {props.detail.capital}</p>
                <p>Sub Region: {props.detail.subRegion}</p>
                <p>Area: {props.detail.area} Km2</p>
                <p>Population: {props.detail.population}</p>
                <p>Activities: </p>
                {props.detail.activities && props.detail.activities.map(activity =>
                    <div key={activity.name}>
                        <p >Name: {activity.name}</p>
                        <p >Duration: {activity.duration}</p>
                        <p >Dificulty: {activity.dificulty}</p>
                        <p >Season: {activity.season}</p>
                        
                    </div>
                )}
            </div>
            
        </div>
    )
}


export default connect(mapStateToProps, {loadCountryDetail})(Detail);