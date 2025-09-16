import Input from './ui/Input';
import './../styles/Form.css';
import Button from './ui/Button';
const FormContactanos = () => {
    return (
        <fieldset >
            <legend>Contáctanos</legend>
            <form>
                <div>
                    <label htmlFor="nombre">Nombre Completo:</label>
                    <Input 
                        type="text" 
                        id="nombre" 
                        name="nombre" 
                        placeholder="Santiago Vera" 
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="email">Correo:</label>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tucorreo@ejemplo.com"
                        required={true}
                    />
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea 
                        id="mensaje" 
                        name="mensaje" 
                        rows="5" 
                        placeholder="Escribe tu mensaje aquí..." 
                        required 
                    ></textarea>
                </div>
                <div>
                    <Button text="Enviar" />
                </div>
            </form>
        </fieldset>
    );
}

export default FormContactanos;
