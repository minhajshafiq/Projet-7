import logo from '../../assets/logo.png';
import '../../styles/App.scss';

function About() {
    return (
        <div className="App">
            <header className='App-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    About
                    Cette page est en cours de création ! <br/>
                    Veuillez patientez quelque semaine merci ! 🫶
                </p>
            </header>
        </div>
    )
}

export default About;