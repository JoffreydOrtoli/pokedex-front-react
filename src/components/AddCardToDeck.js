import React, { useEffect } from 'react';
import Instance from "../components/Instance";
import { useParams, useNavigate } from "react-router-dom";

const AddCardToDeck = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        Instance
        .get(`deck/add/${id}`, { headers: {"Authorization" : `Bearer ${localStorage.accesToken}`} })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
        navigate("/deck");
    }, []);

    return (
        <>    
        </>
    );
};

export default AddCardToDeck;