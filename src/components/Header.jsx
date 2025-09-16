
import './../styles/Header.css'
import Button from './ui/Button';
import cuchara_de_miel from './../assets/img/cuchara_de_miel.png'
const Header = () => {
    return (
        <header data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"data-aos-delay="1500">
            <div>
                <img src={cuchara_de_miel} alt="cuchara_de_miel" />
            </div>
            <div>
                <h1>Pura escencia de la naturaleza en cada gota</h1>
                <p>Miel cruda, cosechada de abejas felices y flores silvestres locales</p>
                <Button text="Contáctanos ahora" />
            </div>
        </header>
    );
}
export default Header;