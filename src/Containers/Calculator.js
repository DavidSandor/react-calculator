import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../Components/Display';
import Button from '../Components/Button';


class Calculator extends Component {
    state = {
        operationChain: [],
        result: 0
    }

    render(){
        return <div className='Calculator'>
            <Display result={this.state.result} operations='2+3'></Display>
            <div className='FlexRow'>
                <Button content='7' ></Button>
                <Button content='8' ></Button>
                <Button content='9' ></Button>
                <Button content='/' ></Button>
            </div>
            <div className='FlexRow'>
                <Button content='4' ></Button>
                <Button content='5' ></Button>
                <Button content='6' ></Button>
                <Button content='x' ></Button>
            </div>
            <div className='FlexRow'>
                <Button content='1' ></Button>
                <Button content='2' ></Button>
                <Button content='3' ></Button>
                <Button content='-' ></Button>
            </div>
            <div className='FlexRow'>
                <Button content='0' ></Button>
                <Button content='.' ></Button>
                <Button content='CLR' ></Button>
                <Button content='+' ></Button>
            </div>
        </div>
    }
}

export default Calculator;