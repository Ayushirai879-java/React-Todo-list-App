import React, { useState } from 'react'

export default function InputField({addItem}) {
    const[item,setItem] =useState("");
    function handleChange(e){
        setItem(e.target.value);
    }
    function handleSubmit(e) {
        addItem(item)
        setItem("");
        e.preventDefault();
        
    }
  return (
    <form onSubmit={handleSubmit}>
      
                <input type="text" placeholder="Add your new task..."
                onChange={handleChange}
                value={item}/>
                <button type="submit" className="add-btn">Add</button>
         
    </form>
  )
}
