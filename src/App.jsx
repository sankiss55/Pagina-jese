import './styles/App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Button_whatsapp from './components/ui/button_whatsapp';
import FeatureItem from './components/ui/FeatureItem';
import Button from './components/ui/Button';
import { GiDrippingHoney, GiHoneyJar, GiFlowerEmblem  } from "react-icons/gi";
import Loading from './components/loading';
import Footer from './components/Footer';
import Recoleccion from './assets/img/recoleccion de miel.jpg'
import TargetFooter from './components/ui/Target';
import Ramita3 from './assets/img/ramita3.png'
import Ramita4 from './assets/img/ramita4.png'
import fondo_productos from './assets/img/fondo_productos.jpg'
import img from './assets/img/img.png'
import AOS from 'aos';
import Button_products from './components/ui/Button_products';
import 'aos/dist/aos.css';
import FormContactanos from './components/FormContactanos';
import Target_products from './components/Target_products';
import { useEffect } from 'react';
function App() {
  useEffect(()=>{
AOS.init();
  }, [])
  return (
    <>
    <Loading />
      <Button_whatsapp />
      <Nav />
      <Header />
     <main>
       <section >
        <h1 data-aos="zoom-out">AUTENTICA, NATURAL, VERDADERA</h1>
        <div>
          <FeatureItem title="Miel 100% pura" icon={<GiDrippingHoney color='#f3e5a7' size={80}/>} />
          <FeatureItem title="Producto artesanal" icon={<GiFlowerEmblem color='#f3e5a7' size={80}/>} />
          <FeatureItem title="Origen natural" icon={<GiHoneyJar color='#f3e5a7' size={80}/>} />
        </div>
        <Button  text="Conoce mas ahora" />
      </section>
      <section   data-aos="fade-up">
        <img src={Ramita3}  alt="ramita" className='ramitas'/>
        <img src={Ramita4} alt="ramita" className='ramitas'/>
       <TargetFooter 
  title="Recolección de Miel"
  children="Nuestro procedimiento de recolección de miel es cuidadoso y respetuoso con el medio ambiente. Cada panal es inspeccionado individualmente para garantizar la calidad y pureza de la miel, asegurando que las abejas puedan continuar su ciclo natural sin alteraciones. Además, utilizamos técnicas tradicionales que mantienen intactos los nutrientes y aromas naturales, ofreciendo un producto fresco y saludable directamente desde la colmena hasta tu mesa."
  text_button="Manda mensaje ahora"
/>

        <div><img src={Recoleccion} alt="Recoleccion" /></div>
      </section>
      <section data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
        
        <img src={fondo_productos} width={'100%'}  alt="fondo_productos" />
        <h1 style={{ textAlign: 'center',color:'black'}}>Conoce nuestros productos</h1>
        
<Target_products  />
      </section>
      <div>
        
      <div>
        
      <img src={img} width={'100%'}  alt="ramita" />
      </div>
      <FormContactanos/>
      </div>
     </main>
     <Footer />
    </>
  )
}

export default App