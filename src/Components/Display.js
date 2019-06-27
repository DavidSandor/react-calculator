import React from 'react';
import './Display.scss';

const display = (props) => {
    const resultLine = <p>{props.result}</p>;
    const operationsLine = <p>{props.operations}</p>

    return(
        <div className='Display'>
            {resultLine}
            {operationsLine}
        </div>
    )
}

export default display;