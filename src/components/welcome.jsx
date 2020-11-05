import React, { useEffect, useState } from "react";
import { navigate } from '@reach/router'
import "./styles.modules.css";

const Welcome = (props) => {
    const [wuery, setWuery] = useState({field : "people"})

    console.log(props)

    const handleSubmit = (e) => {
        e.preventDefault();
        (wuery['field'] && wuery['idnum']) ? navigate(`/${wuery.field}/${wuery.idnum}`) : console.log("select a thing")
    };

    const handleUpdates = (e, updatekey) => {
        setWuery({...wuery, [updatekey] : e.target.value}) 
    }
    console.log("Welcome: ", props)

    return (
        <div className="picker">
            <p>Welcome!</p>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">
                    Lookup a: 
                    <select onChange={ (e) => handleUpdates(e, "field") } >
                        <option value="people">Person</option>
                        <option value="planets">Planet</option>
                        <option value="films">Film</option>
                        <option value="starships">Starship</option>
                    </select>
                </label>
                <label htmlFor="">
                    Select ID Number:
                    <input onChange={ (e) => handleUpdates(e, "idnum") } type="number" min="0" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Welcome;
