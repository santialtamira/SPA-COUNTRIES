import { connect } from "react-redux";
import { loadCountriesByOrder } from "../../actions";
// import s from "./OrderDogs.module.css";


function mapStateToProps(state){
    return{
        allCountries: state.allCountries,
    }
}

function OrderBtn(props){
    
    function handleClick(e){
        e.preventDefault();
        let selection = document.getElementById("listOfOrders").value;
        // console.log("todos los countries", props.allCountries); //
        
        if(selection === "populationAsc" ){
            let orderedCountries = props.allCountries.sort((a,b)=>{
                if(Object.keys(a).length !== 0 && Object.keys(b).length !== 0 ){
                    if(parseInt(a.population) > parseInt(b.population)){
                        return -1;
                    }else if(parseInt(a.population) < parseInt(b.population) ){
                        return 1;
                    }else{
                        return 0;
                    }
                }
            })
            props.loadCountriesByOrder(orderedCountries)
        }else if(selection === "populationDesc" ){
            let orderedCountries = props.allCountries.sort((a,b)=>{
                if(Object.keys(a).length !== 0 && Object.keys(b).length !== 0 ){
                    if(parseInt(a.population) < parseInt(b.population)){
                        return -1;
                    }else if(parseInt(a.population) > parseInt(b.population) ){
                        return 1;
                    }else{
                        return 0;
                    }
                }
            })
            props.loadCountriesByOrder(orderedCountries)
        }else if(selection === "NameAsc"){
            let countriesOrdenados = props.allCountries.sort((a,b)=>{
                if(Object.keys(a).length !== 0 && Object.keys(b).length !== 0 && a.name > b.name){ //Object.keys(a).length !== 0 && Object.keys(b).length !== 0 
                    return -1;
                }else if(Object.keys(a).length !== 0 && Object.keys(b).length !== 0 && a.name < b.name){
                    return 1;
                }else{
                    return 0;
                }
            })
            props.loadCountriesByOrder(countriesOrdenados)
        }else if(selection === "NameDesc"){
            let countriesOrdenados = props.allCountries.sort((a,b)=>{
                if(Object.keys(a).length !== 0 && Object.keys(b).length !== 0 && a.name < b.name){
                    return -1;
                }else if(Object.keys(a).length !== 0 && Object.keys(b).length !== 0 && a.name > b.name){
                    return 1;
                }else{
                    return 0;
                }
            })
            props.loadCountriesByOrder(countriesOrdenados)
        }
    }

    return(
        <div >
            <form action="">
                <select name="" id="listOfOrders" >
                    <option value="populationAsc">Population Asc</option>
                    <option value="populationDesc">Population Desc</option>
                    <option value="NameAsc">Name Asc</option>
                    <option value="NameDesc">Name Desc</option>
                </select>
                <input type="submit" value="Order!" onClick={handleClick} />
            </form>
        </div>
    )
}

export default connect(mapStateToProps, {loadCountriesByOrder})(OrderBtn);