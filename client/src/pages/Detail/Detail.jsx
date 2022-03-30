import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { loadCountryDetail } from "../../actions";
import NavBar from "../../Components/Navbar/NavBar";
import s from "./Detail.module.css";

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
        <div className={s.totalCont}>
            <NavBar></NavBar>
            <div >
                <div className={s.detailContainer}>
                    <div className={s.leftBox}>
                        <h1>{props.detail.name}</h1>
                        <img src={props.detail.imgFlag} alt={`Flag from ${props.detail.name}`} className={s.img}/>
                    </div>
                    <div className={s.middleBox}>
                        <h2 className={s.generalinfoTitle}>General Info</h2>
                        <div className={s.generalInfoBox}>
                            <p>ID: {props.detail.id}</p>
                            <p>Capital: {props.detail.capital}</p>
                            <p>Sub Region: {props.detail.subRegion}</p>
                            <p>Area: {props.detail.area} Km2</p>
                            <p>Population: {props.detail.population}</p>
                        </div>
                    </div>
                    <div className={s.rightBox}>
                        <h2 className={s.activityTitle}>Activities</h2>
                        <div>
                            {console.log("DETAILSSS", props.detail.activities)}
                            {props.detail.activities && props.detail.activities.length < 1 &&  
                            <div className={s.activityBox}>
                                <p>There are no activities yet..</p>
                            </div>}
                            {props.detail.activities && props.detail.activities.map(activity =>
                                <div key={activity.name} className={s.activityBox}>
                                    <div>
                                        <p >Name: {activity.name}</p>
                                    </div>
                                    <div className={s.threeElements}>
                                        <p >Duration: {activity.duration} hour/s</p>
                                        <p >Dificulty: {activity.dificulty}</p>
                                        <p >Season: {activity.season}</p>
                                    </div>
                                    
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
                <div className={s.footer}>
                    <h2>a</h2>
                </div>
        </div>
    )
}


export default connect(mapStateToProps, {loadCountryDetail})(Detail);