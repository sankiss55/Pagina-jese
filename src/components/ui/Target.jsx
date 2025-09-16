import Button from './Button'
import './../../styles/Target.css'
const Target = ({ title, children, text_button=null }) => {
    return(
        <div className='target'>
            <h3>{title}</h3>
            <p>{children}</p>
            {
                text_button &&
                (
                    <Button text={text_button}/>
                )
            }
        </div>
    )
}
export default Target;
