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
    
    for(let i = props.currentPage - 3; i <= props.currentPage + 3; i++){
        if(i > 0 && i <= Math.ceil(props.allCountries.length/props.cardsPerPage))
        paginationNumbers.push(i)
    }
    return(
        
        <div className={s.paginatorContainer}>
            {props.currentPage !== 1 &&(<button className={s.btn} onClick={handleBefore}>Before</button>)}
            {paginationNumbers.map(num => ( 
                num === props.currentPage? 
                <a href="#!" key={num} className={s.currentNum} onClick={()=> props.newPaginator(num)}><strong>{num}</strong> </a> :
                <a href="#!" key={num} className={s.numbers} onClick={()=> props.newPaginator(num)}>{num} </a>
            ))}
            {props.currentPage < Math.ceil(props.allCountries.length/props.cardsPerPage) && <button className={s.btn} onClick={handleNext}>Next</button>}
        </div>
        
    )
}

export default connect(mapStateToProps, {})(Paginator);