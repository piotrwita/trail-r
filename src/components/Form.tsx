import { useState} from 'react';

export function Form() {

    const [inputValue, setInputValue] = useState<{
        name: string;
        done: boolean;
    }>({
        name: '',
        done: false
    });


    const tasks: {
        name: string;
        done: boolean;
    }[] = [
        {
            name:'wyrzuc smieci',
            done: false
        },{
            name:'nakarm',
            done: false
        },{
            name:'silka',
            done: true
        }
    ];


    const handleTaskAdd = (task:{
        name: string;
        done: boolean;
        }) => {
            tasks.push({name: task.name, done: task.done});
        };

    return (
        <form className='container' autoComplete='off'>
            <label htmlFor='name'>Task:</label>
            <input type='text' id='name' value={inputValue.name} ></input>
            <button onClick={()=> handleTaskAdd(inputValue)}>Add</button>
            <p>Todolits</p>
            <ul className='tasks'>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <label>{task.name}</label>
                            <input type='checkbox'>{task.done}</input>
                        </li>
            ))}

        </ul>
</form>
)

}