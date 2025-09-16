import Products from './../products/products_json.json';
import './../styles/TargetProducts.css';
import { useEffect, useState } from 'react';
import Button_products from './ui/Button_products';
import Button from './ui/Button';
const Target_products = () => {
    const [next, setNext] = useState(0);
    const nextProduct = () => {
        setNext((prevNext) => (prevNext + 1) % Products.products.length);
    };
    useEffect(()=>{
    const interval = setInterval(nextProduct, 5000);
    return () => clearInterval(interval);
    }, [])
  return (
    <div>
        <div>
            <Button_products text="<" accion={() => nextProduct} />
        </div>
        <div className="products-container">
        <div className="product-card" key={Products.products[next].id}>
          <div> 
            <img
            src={"img_products/"+Products.products[next].image}
            alt={Products.products[next].name}
            className="product-image"
          />
          </div>
         <div>
             <h3 className="product-title">{Products.products[next].name}</h3>
          <p className="product-description">{Products.products[next].description}</p>
          <Button text="Contáctanos" />
         </div>
        </div>
    </div>

    <div>
        <Button_products text=">"  accion={() => setNext(() => 
    next + 1 >= Products.products.length ? 0 : next + 1
  )}  />
    </div>
    </div>

  );
};

export default Target_products;
