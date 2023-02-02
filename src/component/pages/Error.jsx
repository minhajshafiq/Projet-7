import logo from '../../assets/logo.png';
import '../../styles/App.scss';

function Error() {
    return (
        <div className="App">
            <header className='App-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    ERROR
                    Cette page est en cours de création ! <br/>
                    Veuillez patientez quelque semaine merci ! 🫶
                </p>
            </header>
        </div>
    )
}

export default Error;