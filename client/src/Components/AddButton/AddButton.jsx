import { Link } from "react-router-dom";
import s from "./AddButton.module.css";

function AddButton(){
    return(
        <div>
            <Link to={'/formActivity'}>
                <button className={s.btn}>+ Add activity</button>
            </Link>
        </div>
    )
}

export default AddButton;