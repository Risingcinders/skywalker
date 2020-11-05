import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "./styles.modules.css";

const LinkComp = (props) => {
    const [urlName, setUrlName] = useState("");
    const [loaded, setLoaded] = useState(false);

    // console.log("linkcomp props", props)

    const getName = (urla) => {
        // console.log(index)
        // console.log("peanuts")
        let output = ""
        axios.get(urla).then((response) => {
            response.data.name != undefined ? output = response.data.name : output = response.data.title
            setUrlName(output);
            })
            .then((res) => console.log("linkcomp call complete"));
    };

    useEffect(() => {
        var fish = props.item
        fish = fish.slice(21)
        setLoaded(fish)
    },[urlName])

    useEffect(() => {
        getName(props.item);
    }, [props]);

    return (
        <>
            <Link to={"/" + loaded}>{urlName} </Link>
        </>
    );
};

export default LinkComp;
