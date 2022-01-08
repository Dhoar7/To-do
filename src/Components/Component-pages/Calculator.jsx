import React, { useState } from "react";
import './Calculator.css'

const Calculator = ()=>{

    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '-', '+', '.'];

    const number = ()=>{
        const digits = []

        for(let i=1; i<10; i++){
            digits.push(
            <button key={i} onClick={()=>click(i.toString())}>{i}</button>
            )
        }
        return digits;
    }

    const click = (but)=>{
        if(
            (ops.includes(but) && calc==='')|| 
            (ops.includes(but) && ops.includes(calc.slice(-1))
            )
        ) {
            return;
        }

        setCalc(calc+but);

        if(!ops.includes(but)){
            setResult(eval(calc + but));
        }

    }

    const clear = ()=>{
        setCalc('');
        setResult('')
    }

    const del = ()=>{
        if(calc === ''){
            return
        }

        const a = calc.slice(0, -1);
        setCalc(a);
    }


    return(
        <div className="calApp">
            <div className="calculator">
                <div className="display">
                    {calc || '0'}
                </div>
                <div className="func">
                    <div className="operator">
                        <button onClick={()=>click('/')}>/</button>
                        <button onClick={()=>click('*')}>*</button>
                        <button onClick={()=>click('-')}>-</button>
                        <button onClick={()=>click('+')}>+</button>
                        <button onClick={del}>Del</button>
                    </div>
                    <div className="number" >
                        {number()}
                        <button onClick={()=>click('0')}>0</button>
                    </div>
                    <div className="result">
                        <button onClick={()=>click('.')}>.</button>
                        <button onClick={clear}>AC</button>
                        <button onClick={()=>setCalc(result)}>=</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Calculator;