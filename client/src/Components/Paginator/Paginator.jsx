import { connect } from "react-redux";
import s from "./Paginator.module.css"

function mapStateToProps(state){
    return{
            allCountries: state.allCountries,
        }
}


function Paginator(props){
    const paginationNumbers = [];

    function handleBefore(e){
        props.newPaginator(props.currentPage - 1)
    }

    function handleNext(e){
        props.newPaginator(props.currentPage + 1)
    }
    
    for(let i=1; i <= Math.ceil(props.allCountries.length/props.cardsPerPage); i++){
        paginationNumbers.push(i)
    }
    return(
        
        <div className={s.paginatorContainer}>
            {props.currentPage !== 1 &&(<button className={s.btn} onClick={handleBefore}>Before</button>)}
            {paginationNumbers.map(num => ( 
                <a href="#!" key={num} className={s.numbers} onClick={()=> props.newPaginator(num)}>{num} </a>
            ))}
            <button className={s.btn} onClick={handleNext}>Next</button>
        </div>
        
    )
}

export default connect(mapStateToProps, {})(Paginator);