import   './../../styles/btn_products.css'
const Button_products = ({text, accion=()=>{}}) => {
    return(
        <button className="btn_products" onClick={accion}>{text}</button>
    )
}
export default Button_products;