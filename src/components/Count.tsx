import {useState} from 'react';

export function Count() {
    const [count, setCount] = useState(0);

    const handleAddCount = () => {
        setCount(count+1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
            <button onClick={handleAddCount}>+</button>
        </div>
    )
}

