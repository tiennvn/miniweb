import React, { useState, useEffect } from 'react';

function Content() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json));
    }, []);

    const changeTitle = (title) => {
        console.log(title);
        setTitle(title);    
    }

    return (
        <div>
            <h1>Content</h1>
            <input
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Content;