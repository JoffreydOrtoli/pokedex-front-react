import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
    const navigate = useNavigate();
    if (localStorage.accesToken) {
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h2 className="h1 display-4">Mon Compte</h2>
                </div>
                <div className="profile text-center">
                    <div className="form-group mb-5">
                        <label className="">Nom</label>
                        <div className="h2">{localStorage.lastname}</div>
                    </div>
                    <div className="form-group mb-5">
                        <label className="">Prénom</label>
                        <div className="h2">{localStorage.firstname}</div>
                    </div>
                    <div className="form-group mb-5">
                        <label className="">Email</label>
                        <div className="h2">{localStorage.email}</div>
                    </div>
                    <div className="form-group mb-5">
                        <label className="">Role</label>
                        <div className="h2">{localStorage.role}</div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        useEffect(() => { 
            navigate("/user/login");
        });
    }
    return (
        <>
        </>
    );
};

export default Profil;