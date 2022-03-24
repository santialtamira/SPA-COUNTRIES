import { useState } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
        allCountries: state.allCountries,
    };
}

function FormActivity(props){

    const [input, setInput] = useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        addedCountries: [],   
    });

    function changeHandler(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function clickHandler(e){
        e.preventDefault();
        let addCountry = document.getElementById("addedCountries").value;
        let repo = document.querySelector(".countriesRepo");
        console.log("repoooo",repo)

        repo.insertAdjacentHTML('afterend', `<p>${addCountry}</p>`);
        setInput({
            ...input,
            addedCountries: [...input.addedCountries].concat(addCountry)
        })  
        console.log("addedCountries",input.addedCountries);
    }

    function submitHandler(e){
        e.preventDefault();

        fetch("http://localhost:3001/activities", {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        window.location.assign("http://localhost:3000/countries")
    }

    return(
        <div>
            <h1>Add an Activity</h1>
            <form onSubmit={submitHandler}>

                <div>
                    <p>Name</p>
                    <input type="text" name="name" onChange={changeHandler} value={input.name}/>
                </div>

                <div>
                    <p>Dificulty</p>
                    <select name="dificulty" id="dificulty" onChange={changeHandler} value={input.dificulty}>
                        <option value="select">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div>
                    <p>Duration</p>
                    <input type="text" name="duration" onChange={changeHandler} value={input.duration}/>
                </div>

                <div>
                    <p>Season</p>
                    <select name="season" id="season" onChange={changeHandler} value={input.season}>
                        <option value="select">Select</option>
                        <option value="summer">Summer</option>
                        <option value="winter">Winter</option>
                        <option value="autumn">Autumn</option>
                        <option value="spring">Spring</option>
                    </select>
                </div>

                <div>
                    <p>Add countries</p>
                    <div className="countriesRepo">
                    </div>
                    <select name="addedCountries" id="addedCountries">
                        {props.allCountries.map(country =>
                            <option value={country.name} key={country.id}>{country.name}</option>
                        )}
                    </select>
                    <button onClick={clickHandler}>Add country</button>
                </div>

                <input type="submit" value="Submit!" />
            </form>
        </div>
    )
}

export default connect(mapStateToProps, {})(FormActivity);
