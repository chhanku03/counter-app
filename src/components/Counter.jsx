import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {
    const count=useSelector((state)=> state.counter.value);
    const dispatch=useDispatch();
  return (
    <div className='flex flex-col justify-center items-center  w-full max-w-[350px] h-full max-h-[400px] bg-gray-400 border border-black'>
        <button className='border rounded-full border-black bg-white text-black py-2 px-3 font-bold' onClick={()=>dispatch(increment())}>Increament</button>
        <br />
        <br />
        <div className='text-center font-bold ' >{count}</div>
        <br />
        <br />
        <button  className='border rounded-full border-black bg-white text-black py-2 px-3 font-bold' onClick={()=>dispatch(decrement())}>Decreament</button>
    </div>
  )
}

export default Counter