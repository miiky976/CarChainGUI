import { Icon } from '@iconify/react';
import { PropTypes } from 'prop-types';

const accion = () => {
    console.log('No tengo una accion');
}

export const BtnIcon = ({icon, OnClick=accion}) => {
    return (
        <button className="BtnIcon" onClick={OnClick}>
            <Icon icon={icon}/>
        </button>
    )
}
BtnIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    OnClick: PropTypes.func
}
BtnIcon.defaultProps = {
    icon: 'gg:ghost-character'
}