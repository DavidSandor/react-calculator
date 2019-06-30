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

    buttonClickHandler = (buttonInput, type) => {
        
        let newChain = this.state.operationChain === '0' ? buttonInput : this.state.operationChain + buttonInput;

        if(type === 'clear') {
            newChain = '0';
        }

        const newResult = Calculate(newChain);

        this.setState({
            operationChain: newChain,
            result: newResult
        });        
    }

    buttonFactory = (contents) => {

        const getButtonType = (content) => {

            if(Number(content) || content === '0'){
                return 'digit';
            }
            else if(content === '.'){
                return 'decimal-separator';
            }
            else if(content === 'CLR') {
                return 'clear';
            }
            else{
                return 'operator';
            }
        }

        const buttons = contents.map(
            content => <Button 
                            key={content} 
                            type={getButtonType(content)} 
                            content={content} 
                            buttonClickHandler={this.buttonClickHandler}/>
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