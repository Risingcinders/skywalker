import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.modules.css";
import LinkComp from "./linkcomp";

const Planet = (props) => {
    const [thingy, setThingy] = useState({});
    const [urlName, setUrlName] = useState("");
    const [loaded, setLoaded] = useState(false);

    const getFromAPI = () => {
        axios
            .get("https://swapi.dev/api/" + props.field + "/" + props.id)
            .then((response) => {
                setThingy(response.data);
            });
    };

    useEffect(() => {
        getFromAPI();
    }, [props.field]);

    return (
        <div className="picker">
            <table className="entry">
            {Object.entries(thingy).map((bug, index) => {
                return (
                    
                    <tr>
                        <td>{bug[0]}:</td>
                        <td>
                        {typeof bug[1] == "object" ? (
                            bug[1].map((item, index) => {
                                return <LinkComp item={item} />;
                            })
                        ) : typeof bug[1] == "string" ? (
                            bug[1].substring(0, 4) == "http" ? (
                                <LinkComp item={bug[1]} />
                            ) : (
                                <p> {bug[1]} </p>
                            )
                        ) : (
                            <p> {bug[1]} </p>
                        )}
                        </td>
                    </tr>
                );
            })}
            </table>
        </div>
    );
};

export default Planet;
