import React, {useState}from "react";

function Todo(){
    // Input tag to get dat from the users
    // listto store to store the tasks
    const [items,setItems] = useState([]);    
    const [input,setInput] = useState('');   
    
    // Create the function to handle user's inputs
    // We use the chang edetector to detect whether the user 
    // entered a new value in the input box
    const handleChange = (e)=>{
        setInput(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (input.trim()!==''){
            const newItem = {
                id: Date.now(),
                text:input,
                done: false,
            };
            setItems([...items,newItem]);
            setInput("");
        }
    }

    const handleDelete = (id) =>{
        const updatedItems = items.filter((item)=> item.id !== id);
        setItems(updatedItems);
    };

    const handleToggle = (id) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
        );
        setItems(updatedItems);
    };

    
    // Implement the return function that returns JSX to the browser
    return(
        <div>
            <h1>ToDo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="taxt" value={input} placeholder="Add a new task" onChange={handleChange} />
                <button className="btn btn-primary" type="submit">Add</button>
            </form>
            <ul className="list-group">
            {items.map((item ) => (
                
                <li className="list-group-item" key={item.id}>
                    <span
                        className={item.done ? 'done' : ''}
                        onClick={() => handleToggle(item.id)}
                    >
                        {item.text}
                    </span>
                    <button className="btn btn-primary" onClick={ () => handleDelete(item.id)}> Delete </button>
                </li>
            ))}
            </ul>
        </div>
    )
    
}

export default Todo;