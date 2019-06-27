import React, { Component } from 'react';
import './Calculator.scss';
import Display from '../Components/Display';
import Button from '../Components/Button';
import Calculate from '../BusinessLogic/Operations';

class Calculator extends Component {
    state = {
        operationChain: '0',
        result: '0'
    }

    buttonClickHandler = (buttonInput) => {
        
        const newChain = this.state.operationChain === '0' ? buttonInput : this.state.operationChain + buttonInput;

        const newResult = Calculate(newChain);

        console.log(newChain);

        this.setState({
            operationChain: newChain,
            result: newResult
        });        
    }

    buttonFactory = (contents) => {
        const buttons = contents.map(
            content => <Button key={content} content={content} buttonClickHandler={(event) => this.buttonClickHandler(content)}/>
            )
            
        return buttons;
    }

    render(){
        return <div className='Calculator'>
            <Display result={this.state.result} operations={this.state.operationChain}></Display>
            <div className='FlexRow'>
                {this.buttonFactory(['7', '8', '9', '/'])}
            </div>
            <div className='FlexRow'>
                {this.buttonFactory(['4', '5', '6', 'x'])}
            </div>
            <div className='FlexRow'>
                {this.buttonFactory(['1', '2', '3', '-'])}
            </div>
            <div className='FlexRow'>
                {this.buttonFactory(['0', '.', 'CLR', '+'])}
            </div>
        </div>
    }
}

export default Calculator;