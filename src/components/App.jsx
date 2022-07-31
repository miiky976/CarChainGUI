import { Cabeza } from "./Cabeza";
import { Registrar } from "./Registrar";
import { Comprar } from "./Comprar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProfileCard } from "./ProfileCard";
import { useState } from "react";
import { MisAutos } from "./MisAutos";
export const App = () => {
    const [profid, setprofid] = useState("Ingresar");
    console.log(profid);
    const ChangeProfID = (id) => {
        setprofid(id);
    }
    return (
        <BrowserRouter>
            <Cabeza titulo='CarChain'></Cabeza>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Registrar" element={<Registrar />} />
                <Route path="/Comprar" element={<Comprar />} />
                <Route path="/Perfil" element={<ProfileCard profileid={profid} OnClickState={ChangeProfID} />} />
                <Route path="/MisAutos" element={<MisAutos />} />
            </Routes>
        </BrowserRouter>
    )
}
