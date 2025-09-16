import Lottie from "lottie-react";
import loadingAnimation from "./../assets/lottie/loading.json";
import './../styles/loading.css';
import { useState } from "react";

const Loading=()=>{
    
useState(()=>{
setTimeout(() => {
    document.querySelector('.loading')?.remove();
}, 2000);
}, []);
    return(
        <div className="loading">
           <div>
             <Lottie animationData={loadingAnimation}  loop={true}/>
           </div>
        </div>
    )
}
export default Loading;