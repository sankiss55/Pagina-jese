const Input=({ type, id, name, placeholder, required })=>{
    return (
        <input 
        className="input"
            type={type} 
            id={id} 
            name={name} 
            placeholder={placeholder} 
            required={required} 
        />
    );
}
export default Input