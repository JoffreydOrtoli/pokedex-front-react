import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Instance from "../components/Instance";

const LogOutSession = () => {
    const navigate = useNavigate();

    useEffect(() => {
        Instance.get("user/logOut", { headers: {"Authorization" : `Bearer ${localStorage.accesToken}`} }).then((res) => console.log('done'));
        localStorage.clear();
        navigate("/")
    }, []);
    
    return (
        <>     
        </>
    );
};

export default LogOutSession;