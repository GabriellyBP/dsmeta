import logo from '../../assets/img/logo1.gif';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/GabriellyBP"> GabriellyBP</a>
                </p>
            </div>
        </header >
    )
}

export default Header;