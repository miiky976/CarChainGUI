import { Cabeza } from "./Cabeza";
import {Registrar} from "./Registrar";
import { Comprar } from "./Comprar";
import { HashRouter,Routes ,Route, Link } from "react-router-dom";
import { Inicio } from "./Inicio";
export const App = () => {
    return (
        <HashRouter>
            <Cabeza titulo='CarChain'></Cabeza>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Registrar" element={<Registrar/>}/>
                <Route path="/Comprar" element={<Comprar/>}/>
            </Routes>
        </HashRouter>
    )
}
