import { PropTypes } from 'prop-types';
export const CarView = ({ img, titulo, descr }) => {
    return (
        <div className="terjeta">
            <button className="card">
                <img className="imgAuto" src={img} />
                <div className="container">
                    <h4>{titulo}</h4>
                    <p>{descr}</p>
                </div>
            </button>
        </div>
    )
}
CarView.propTypes = {
    img: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
}
CarView.defaultProps = {
    img: 'https://i.ytimg.com/vi/QaAVBa_LSgY/hqdefault.jpg',
    titulo: 'Chevy',
    descr: 'Modelo 2004 Bien Tuneado'
}