import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Button = (props) => {
    const { css, index } = props;
    // console.log(css)
    const btnCss = { marginLeft: '8px' }
    return (
        <>
            <button style={css}>{css.name}
                {
                    index < 1 ? <FontAwesomeIcon style={btnCss} icon={faTrashCan} beatFade /> : <FontAwesomeIcon style={btnCss} icon={faArrowRight} beatFade />
                }
            </button>
        </>
    );
};

export default Button;