import React from 'react'
import Counter from './counter'
import { useState } from 'react';
import Button from './Button';
import DB from '../appwrite/database';
import { useNavigate } from 'react-router-dom';


function Purchase() {
    const [count, setCount] = useState(1);
    const [post , setPost] = useState(false)
    const [ticketID , setTicketID] = useState(generateRandomNumberString(7))
    // set
    let number = count
    // const [number, setNumber] = useState("");
    // const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState('');
    const navigate = useNavigate()

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 1) {

            setCount(count - 1)
        }


    }
    function generateRandomNumberString(length) {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
    
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
    // const ticketID = generateRandomNumberString(7)
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("hello world")
        try {
            let dbpost = await DB.createPost(ticketID ,{number})
            if(dbpost){
                console.log('post created')
                setPost(true)
                console.log(ticketID)
                setTimeout(()=>{
                    navigate("/page2")
                } , 10000)
            }

            
        } catch (error) {
            throw error
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit} className='px-4 py-16'>
                <div className='flex justify-between'>
                    <p>Number of Ticket</p>
                    <div className='flex gap-1'>
                        <h1 className='bg-neutral-200 px-7 rounded-lg'>{count}</h1>
                        <div className='flex gap-2'>
                            <Button type="button" className={"w-10 py-0"} onClick={increment}>+</Button>
                            <Button type="button" className={"w-10 py-0"} onClick={decrement}>-</Button>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-7 mt-4'>
                    {/* <div className='flex gap-5'>
                        <label>Enter Your Name</label>
                        <input onChange={(e) => setName(e.target.value)} className='bg-neutral-200 rounded-lg p-1 px-2' type="text" placeholder='Enter your name' />
                    </div> */}
                    <div>Ticket ID : {ticketID}</div>
                    
                </div>
                {!post && <Button type = "submit" className={'mt-16'}>Buy</Button>}
                {post && <div className='bg-green-500 py-1 '>Ticket ID : {ticketID} is Booked</div>}
                {post && <div className=' '>Copy Ticket Id for future reference</div>}
            </form>
        </>


    )
}

export default Purchase