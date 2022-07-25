import { PropTypes } from 'prop-types';
export const SimpleTextField = ({ id,placeH }) => {
    return (
        <input
            id={id}
            placeholder={placeH}
            type="text"
            name="searchinput"
            className="simpleTextField"
        />
    )
}
SimpleTextField.propTypes = {
    id: PropTypes.string.isRequired,
    placeH: PropTypes.string.isRequired
}