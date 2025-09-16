import { Routes, Route } from "react-router-dom";
import App from './../App';
import Catalogo from './../pages/Catalogo';
const AppRouter=()=>{
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
    )
}
export default AppRouter;