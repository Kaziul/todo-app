import React, { useState } from 'react';
import './NewTodoForm.css';
export default function NewTodoForm(props) {
    const [todo, setTodo] = useState({title: "", desc: ""});
    const {title, desc} = todo;
    const handleChange = (event) =>{
        const name = event.target.name;
        setTodo((oldTodo) =>{
            return {...oldTodo, [name]:event.target.value}
        })
    };
     const handleSubmit = (event) => {
       event.preventDefault();
       props.onAddTodo(todo);
       setTodo({title: "", desc: ""})
     };

     


  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" value={title}  onChange={handleChange}/>
      </div>
      <div className="form-field">
        <label htmlFor="dese">Description: </label>
        <textarea name="desc" id="desc" value={desc} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Add todo</button>
    </form>
  );
}
