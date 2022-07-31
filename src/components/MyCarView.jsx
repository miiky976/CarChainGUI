import { BtnPrimaryCont } from "./BtnPrimaryCont";
import { PropTypes } from 'prop-types';
export const MyCarView = ({ id, Nombre, Modelo, Marca, Motor, img }) => {
    return (
        <div className="MyCarCard">
            <div className="MyCarData">
                <img className="imgMiAuto" src={img} />
                <div className="MyCarTexto">
                    <h4>{Marca} {Nombre} {Modelo} {Motor}</h4>
                    <h4>{id}</h4>
                </div>
            </div>
            <div className="MyCarOptions">
                <BtnPrimaryCont Texto={"Ver Ofertas"}></BtnPrimaryCont>
                <BtnPrimaryCont Texto={"Documentos"}></BtnPrimaryCont>
            </div>
        </div>
    )
}
MyCarView.propTypes = {
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    Nombre: PropTypes.string.isRequired,
    Modelo: PropTypes.string.isRequired,
    Marca: PropTypes.string.isRequired,
    Motor: PropTypes.string.isRequired,
}
MyCarView.defaultProps = {
    id: "0x1234",
    img: 'https://i.ytimg.com/vi/QaAVBa_LSgY/hqdefault.jpg',
    Nombre: 'Chevy',
    Modelo: '2004',
    Marca: "Chevrolet",
    Motor: "1.6"
}