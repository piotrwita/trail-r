import {useRef, useState} from "react";

export function Add() {
    const input1element = useRef<HTMLInputElement | null>(null);
    const input2element = useRef<HTMLInputElement | null>(null);
    let numeric1Value: number = 0;
    let numeric2Value: number = 0;
    const [sumValue, setSumValue] = useState(0);
    const handleClick = () => {
        if (input1element.current) {
            numeric1Value = parseFloat(input1element.current.value);
        }
        if (input2element.current) {
            numeric2Value = parseFloat(input2element.current.value);
        }

        setSumValue(add(numeric1Value,numeric2Value));
    };
    const add = (v1:number, v2:number) => v1 + v2;

    return (
        <>
            <input id='input1' type='number' ref={input1element}/>
            <input id='input2' type='number' ref={input2element}/>
            <button onClick={handleClick}>{sumValue}</button>
        </>
    )
}