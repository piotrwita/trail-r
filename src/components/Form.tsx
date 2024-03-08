import {useRef, useState} from "react";
import {tasks as tasksData} from "../data/tasks";

export function Form() {
    const temptasks : string[] = [
        'wyrzuc smieci',
        'nakarm',
        'silka'
    ];

    const [tasks, setTasks] = useState(temptasks);


    tasks.push('kolejnarzecz');
    const taskRef = useRef<HTMLInputElement | null>(null);
    const handleTaskAdd = (name:string) => {
        //event.preventDefault();
        tasks.push(name);
        setTasks(tasks);
    };

    return (
        <form className='container' autoComplete='off'>
            <label htmlFor='name'>Task:</label>
            <input type='text' id='name' ref={taskRef}></input>
            <button onClick={()=> handleTaskAdd(taskRef.current?.value ?? 'a')}>Add</button>
            <p>Todolits</p>
            <ul className='tasks'>
                    {tasks.map((name, index) => (
                        <li key={index}>
                            <label htmlFor={name}>{name}</label>
                            <input type='checkbox' id={name} name={name}></input>
                        </li>
            ))}

        </ul>
</form>
)

}