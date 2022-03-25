import { Link } from "react-router-dom";
import AddButton from "../AddButton/AddButton";
import s from "./NavBar.module.css"


function NavBar(){
    return(
        <div className={s.navContainer}>
            <Link to="/countries" className={s.aLink}>
                <h1 className={s.title}>Henry COUNTRIES</h1>
            </Link>
            <AddButton></AddButton>
        </div>
    )
}

export default NavBar;