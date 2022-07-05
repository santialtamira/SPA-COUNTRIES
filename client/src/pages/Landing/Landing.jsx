import { useNavigate } from "react-router-dom";
import s from "./Landing.module.css";

export default function Landing(){
    const navigate = useNavigate();
    function handleClick(){
        navigate("/countries")
    }

    return(
        <div className={s.container}>
            <div className={s.textAndbtn}>
                <h1 className={s.title}>Welcome to our COUNTRIES page!</h1>
                <button className={s.btn} onClick={handleClick}>View All Countries</button>
            </div>
        </div>
    )
}