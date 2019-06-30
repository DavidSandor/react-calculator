import React from 'react';
import './Button.scss';

const button = (props) => {

    const classNames = ['Button'];

    if(props.type === 'operator') {
        classNames.push('Button-operator');
    }
    else if(props.type === 'clear') {
        classNames.push('Button-clear');
    }    

    return(
        <button className={classNames.join(' ')} onClick={(event) => props.buttonClickHandler(props.content, props.type)}>{props.content}</button>
    )
}

export default button;