import '../App.css';
import {useNavigate} from "react-router-dom";

export default function Signout(){
    const navigate = useNavigate();
    const déco = (event) => {
        localStorage.clear();
        navigate("/signin");
    }
    return(
        <form form-method="post" onClick={déco}>
                    <button type="submit">Log out!</button>
        </form>
    )
}