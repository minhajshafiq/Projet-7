import logo from '../../assets/logo.png';
import '../../styles/App.scss';

function Logement() {
    return (
        <div className="App">
            <header className='App-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    LOGEMENT
                    Cette page est en cours de création ! <br/>
                    Veuillez patientez quelque semaine merci ! 🫶
                </p>
            </header>
        </div>
    )
}

export default Logement;