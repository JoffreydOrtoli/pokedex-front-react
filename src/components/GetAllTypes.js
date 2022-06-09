import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAllTypes = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      try {
        axios.get("http://localhost:9999/types").then((res) => setData(res.data));
        
      }catch(err) {
        console.error(err);
      }
    }, []);
    return (
        <div>
            <h1 className="h4 liste-types_title">Cliquez sur un type pour voir tous les Pokémons de ce type</h1>
            <div id="types-box">
                {data.map((type) =>
                    <a key={type.id} className={`buttons-type ${type.name.toLowerCase()}`} href={`/types/${type.id}`}>{type.name}</a>
                )}
            </div>
        </div>
    );
};

export default GetAllTypes;