import { connect } from "react-redux";
import s from "./Paginator.module.css"

function mapStateToProps(state){
    return{
            allCountries: state.allCountries,
        }
}

function Paginator(props){
    const paginationNumbers = [];

    for(let i=1; i <= Math.ceil(props.allCountries.length/props.cardsPerPage); i++){
        paginationNumbers.push(i)
    }
    return(
        
        <div className={s.paginatorContainer}>
            {paginationNumbers.map(num => ( 
                <a href="#!" key={num} className={s.numbers} onClick={()=> props.newPaginator(num)}>{num} </a>
            ))}
        </div>
        
    )
}

export default connect(mapStateToProps, {})(Paginator);