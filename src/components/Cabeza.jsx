import { Icon } from '@iconify/react';
import { BrowserRouter,Routes ,Route, Link, NavLink } from "react-router-dom";
export const Cabeza = ({ titulo }) => {
    return (
        <>
            <nav>
                <span className="Titulo">
                    <Link to={"/"}>CarChain</Link>
                </span>
                <span className="Links">
                    {/* <Link to="/Registrar">Registrar</Link>| */}
                    <Link to={"/Registrar"} className="varel">Registrar</Link>|
                    <Link to={"/Comprar"} className="varel">Comprar</Link>|
                    <a className="varel" href="/Vender">Vender</a>
                </span>
                <span className="Perfil">
                    <a href="/Perfil"><Icon icon="gg:profile"/></a>
                </span>
            </nav>
        </>
    );
}