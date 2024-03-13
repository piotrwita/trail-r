import React, { useState, ChangeEvent } from 'react';
import {Category, Task} from "../types/types";

export function Form() {

    const categories : Category[] = ['general','gym','work'];

    const [selectedCategory , setSelectedCategory] = useState('general');

    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedCategory(event.target.value);
    };

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
            category: selectedCategory as Category
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
                        {categories.map(category => (
                            <>
                                <input type='radio'
                                       name='category'
                                       value={category}
                                       id={`category-${category}`}
                                       checked={selectedCategory === category}
                                       onChange={handleOptionChange}/>
                                <label htmlFor={`category-${category}`}>{category}</label>
                            </>
                            ))}
                    </li>
                </ul>
                <p>Selected option: {selectedCategory}</p>
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
                        <label>{task.category}</label>
                    </li>
                ))}
            </ul>
        </>
    )

}