import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../Components/Display';

class Calculator extends Component {
    state = {
        operationChain: [],
        result: null
    }

    render(){
        return <div className='Calculator'>
            <Display result='5' operations='2+3'></Display>
        </div>
    }
}

export default Calculator;