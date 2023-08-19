import React, { useState } from 'react';
import { HiShoppingBag } from "react-icons/hi";
import './styles/counter.css'
function Counter() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  return (
    <div className='counter'>
      <h4>{"UAN " + sum + " "} <HiShoppingBag /> {num}</h4>
    </div>
  );
}

export default Counter;
