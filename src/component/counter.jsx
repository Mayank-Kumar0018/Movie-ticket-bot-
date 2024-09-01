import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0){

        setCount(count -1)
    }


}
  return (
    <div className='flex gap-1'>
      <h1 className='bg-neutral-200 px-7 rounded-lg'>{count}</h1>
      <div className='flex gap-2'>
      <Button className={"w-10 py-0"} onClick={increment}>+</Button>
      <Button className={"w-10 py-0"} onClick={decrement}>-</Button>
      </div>
    </div>
  );
};

export default Counter;