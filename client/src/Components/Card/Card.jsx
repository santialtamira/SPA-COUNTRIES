import { Link } from "react-router-dom";
import s from "./Card.module.css";


export default function Card(props){
    return (
        <div className={s.cardContainer}>
            <Link to={`/countries/${props.id}`}>
                <img src={props.imgFlag} alt={`Flag from ${props.name}`} />
                <h3>Country: {props.name}</h3>
                <p>Continent: {props.continent}</p>
            </Link>
            
        </div>
    )
}