import React, { useState} from 'react';

interface Task {
    id: number;
    text: string;
    checked: boolean;
    category?: 'general'|'gym'|'work';
}
export function Form() {

    const categories: string[] = ['general','gym','work']


    const [inputValue, setInputValue] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newTask: Task = {
            id: Date.now(),
            text: inputValue,
            checked: false,
            category: 'general'
        };

        setTasks([...tasks, newTask]);
        setInputValue('');
    };

    const handleCheckboxChange = (id: number) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, checked: !task.checked };
            }
            return task;
        }));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='taskName'
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Enter label text'
                />
                <ul className='categories'>
                    <li>
                        <input type='radio'
                               name='category'
                               value='general'
                               id='category-general'/>
                        <label htmlFor='category-general'>general</label>
                    </li>
                </ul>
                <button type='submit'>Add Label</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type='checkbox'
                            checked={task.checked}
                            onChange={() => handleCheckboxChange(task.id)}
                        />
                        <label>{task.text}</label>
                    </li>
                ))}
            </ul>
        </>
    )

}