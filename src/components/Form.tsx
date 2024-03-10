import React, { useState} from 'react';

interface Task {
    id: number;
    text: string;
    checked: boolean;
}
export function Form() {

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
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='Enter label text'
                />
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