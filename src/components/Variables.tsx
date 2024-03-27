import {useRef, useState} from "react";

export function Variables() {
    let test: string | number;
    test = 8;
    test = 'test';
    test = 9;


//http://localhost:3000/index.html?discount=false
    const urlParam = new URLSearchParams(window.location.search).get('discount') === 'true';

    const calculate = (val1 :number, hasDiscount:boolean ) => {
        return hasDiscount ? val1 * 0.8 : val1;
    };

    return (
        <>
            <p>{test}</p>
            <p>{calculate(10, urlParam)}</p>
            <p>{crypto.randomUUID}</p>
            <p>{urlParam ? 'true' : 'false'}</p>
        </p>
    )
}