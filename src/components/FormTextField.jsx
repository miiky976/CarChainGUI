import { PropTypes } from 'prop-types';

export const FormTextField = ({ content, id }) => {
    return (
        <div className='form__div'>
            <input className='form__input' id={id} type="text" placeholder='  '/>
            <label className='form__label' htmlFor={id}>{` ${content} `}</label>
        </div>
    )
}
FormTextField.propTypes = {
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}