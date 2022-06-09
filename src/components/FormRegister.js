import React from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const FormRegister = () => {
    const navigate = useNavigate();

    function validForm(event) {
        event.preventDefault();
        const formData = new FormData(document.querySelector(".form_register-login"));
        const dataObject = Object.fromEntries(formData);
        axios.post("http://localhost:9999/user/register", dataObject).then((res)=> {console.log(res.data)}).catch((err) => console.log(err));
        navigate('/user/login');
      };
      
        return (
          <div>
            <form className="form_register-login" method="post">
              <div className="form-group">
                  <label htmlFor="inputEmail">Prénom</label>
                  <input type="text" className="form-control"  name="firstname" id="firstname" aria-describedby="firstnameHelp" placeholder="Enter Firstname" onKeyPress={(e)=>{e.target.keyCode === 13 && e.preventDefault();}}/>
              </div>
              <div className="form-group">
                  <label htmlFor="inputEmail">Nom</label>
                  <input type="text" className="form-control" name="lastname" id="name" aria-describedby="nameHelp" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                  <label htmlFor="inputEmail">Adresse email</label>
                  <input type="email" className="form-control" name="email"  id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" className="form-control" name="password"  id="password" placeholder="Enter Password" />
              </div>
              <div className="form-group">
                  <label htmlFor="passwordConfirm">Confirmez votre mot de passe</label>
                  <input type="password" className="form-control" id="passwordConfirm" name="passwordConfirm" placeholder="Confirm Password" />
              </div>
              <button className="btn btn-block btn_validate-register" type="submit" onClick={(event) => validForm(event)}>Valider</button>
            </form>
          </div>
        );
      
};

export default FormRegister;