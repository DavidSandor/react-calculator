import React from 'react';
import './Button.scss';

const button = (props) => {
    return(
        <button className='Button'>{props.content}</button>
    )
}

export default button;