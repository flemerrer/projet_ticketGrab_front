import '../App.css';
import {NavLink, useParams} from "react-router-dom";
import Signout from "./Signout";

export default function Footer() {
    return(
<footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
    <div className="btn-group">
        <NavLink to="/listusers" className="btn btn-outline-dark bg-light">  Bouton Liste users  </NavLink>
        <NavLink to="/signin" className="btn btn-outline-dark bg-light">  Se connecter  </NavLink>
        <NavLink to="/register" className="btn btn-outline-dark bg-light">  Créer un compte  </NavLink>
    <Signout/>
    </div>
</footer>
    );
}