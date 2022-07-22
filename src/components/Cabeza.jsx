
export const Cabeza = ({ titulo }) => {
    return (
        <>
            <header>
                <span className="Titulo">
                    <a href="/">{titulo}</a>
                </span>
                <span className="Links">
                    {/* <Link to="/Registrar">Registrar</Link>| */}
                    <a className="varel" href="/Registrar">Registrar</a>|
                    <a className="varel" href="/Comprar">Comprar</a>|
                    <a className="varel" href="/Vender">Vender</a>
                </span>
                <span className="Perfil">
                    <a href="#"><span className="iconify" data-icon="gg:profile"></span></a>
                </span>
            </header>
        </>
    );
}