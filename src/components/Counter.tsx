import { useState, useEffect }  from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            console.log(e.key);
        });

        return () => {
            window.removeEventListener("keydown", (e) => {
                console.log(e.key);
            });
        }
    }, [counter]);

    return <button onClick={() => setCounter(counter+1)}>{counter}</button>
}