import React from 'react';
import './ColumnList.css';
import If from './If.js';


const ColumnList = ({title, addTask, items, updateTask}) => {
    const currentItems = items.filter( _ => _.status === title);
    console.log(currentItems);
    return (
        <div className="column-list">
            <h3>{title}</h3>
            <If test={title === 'To Do'}>
                <form onSubmit={addTask}>
                    <input type="text" />
                    <button type="submit">Add Task</button>
                </form>
            </If>
            <ul className="list-items">
                {currentItems.map(item => (
                    <li key={item.id}>
                        <input 
                            onChange={e => updateTask(e.target, item)}
                            type="checkbox" 
                            checked={title === 'Done'} 
                        />
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ColumnList;