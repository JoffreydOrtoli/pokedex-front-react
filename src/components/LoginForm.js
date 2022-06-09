import React from 'react';
import { useNavigate } from 'react-router-dom';
import Instance from "../components/Instance";

const LoginForm = () => {
    const navigate = useNavigate();
    function validForm(event) {
            event.preventDefault();
            const formData = new FormData(document.querySelector(".form_register-login"));
            const dataObject = Object.fromEntries(formData);
            Instance.post("user/login", dataObject).then((res)=> {
                const { firstname, lastname, email, role } = res.data.user;
                const accesToken = res.data.accesToken;
                localStorage.setItem("firstname", firstname);
                localStorage.setItem("lastname", lastname);
                localStorage.setItem("email", email);
                localStorage.setItem("role", role);
                localStorage.setItem("accesToken", accesToken);
                navigate('/');
            }).catch((err) => {alert("Erreur Adresse email ou MDP");});
    };

    

    return (
        <div>
            <form className="form_register-login" method="POST">
                <h1 className="h3 mb-3 font-weight-normal">Enregistrez vous</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" />
                <label htmlFor="inputPassword" className="sr-only">Password</label><br />
                <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" />
                <button className="btn btn-block btn_validate-register" type="submit" onClick={(event) => validForm(event)}>Sign in</button>
                <a className="link-to-register" href="/user/register">Cliquez-ici pour créer un compte</a>
            </form>
        </div>
    );
};

export default LoginForm;