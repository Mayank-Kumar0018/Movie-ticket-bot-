import React from 'react'
import { useState } from 'react'
import DB from '../appwrite/database'
import Button from './Button'

function Cancel() {
    const [ticket, setTicket] = useState(null)
    const [error, setError] = useState(null)
    const [userData, setUserData] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        if (ticket) {
            try {

                const dbpost = await DB.getPost(ticket)
                console.log(dbpost)
                setUserData(dbpost)
                console.log(userData)

            } catch (error) {
                setError(error)
                setUserData(null)
                throw error;
            }

        }

    }
    console.log(userData)
    const handleCancel = async () => {
        if (userData) {
            console.log(userData)

            const cancel = await DB.deletePost(userData.ticketID)
            if (cancel) {
                console.log("deleted")
            }
        }
    }
    const now = new Date();
    const formattedTime = now.toLocaleString();
    return (
        <>
            <form onSubmit={handleSubmit} className='flex gap-4 justify-center mt-4'>
                <input onChange={(e) => setTicket(e.target.value)} className='bg-neutral-200 border-2 rounded-md p-1 px-3 w-64 focus:outline-none focus:border-neutral-400' placeholder='Enter TicketID' />
                <Button type="submit" className="w-16">Submit</Button>

            </form>
            {error && <p className='text-red-500 text-center'>Invalid Ticket ID</p>}
            {userData && <div className='text-sm text-neutral-600 mb-0 m-4'>{formattedTime}</div>}
            {userData && <div className='flex flex-col items-center justify-center gap-3 bg-neutral-200 rounded-lg mt-0 m-4 h-32'>
                <div>Ticket ID : {userData.ticketID}</div>
                <div>Number of Ticket : {userData.number}</div>
            </div>}
            {userData && <Button onClick={handleCancel} className={'bg-red-600'}>Cancel</Button>}

        </>
    )
}

export default Cancel