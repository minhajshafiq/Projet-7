import { Link } from "react-router-dom";
//import '../../../styles/App.scss';
import './Error.scss';

function Error() {
    return (
        <main className="error">
            <h1 className="error_title"> 404 </h1>
            <p className="error_p"> Oups! La page que vous demandez n'existe pas. </p>
            <Link className="error_link" to="/">Retourner sur la page d’accueil</Link>
        </main>
    )
}

export default Error;