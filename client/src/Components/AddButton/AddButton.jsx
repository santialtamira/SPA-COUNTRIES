import { Link } from "react-router-dom";

function AddButton(){
    return(
        <div>
            <Link to={'/formActivity'}>
                <button>+ Add activity</button>
            </Link>
        </div>
    )
}

export default AddButton;