import React from 'react'
import { useState } from 'react';

export default function Result({newItem,onDelete,id}) {
    const [isDone,setDone] =useState(false);
  return (
    <div
    style={{cursor:'pointer'}}
    onClick={() => {
        setDone(true)
        setTimeout(() => {
            onDelete(id);

        },2000);
    }}
    >
        <li style={{textDecoration:isDone ? 'line-through' : 'none'}}>
            {newItem}
        </li>
      
    </div>
  )
}
