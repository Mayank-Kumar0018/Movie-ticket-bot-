import React from 'react'
import Button from './Button'
import MSG from './MSG'
import { useNavigate } from 'react-router-dom'

function BuyTicket() {
  const navigate = useNavigate()
  const now = new Date();
  const formattedTime = now.toLocaleString();
  return (
    <>
      <div className='flex justify-end mt-2 mr-2'>
        <Button className={"w-24"}>Buy Ticket</Button>
      </div>
      <div className='px-4 py-4'>
        <div className='text-neutral-600 text-sm'>{formattedTime}</div>
        <MSG>How can I assist you further?</MSG>

        <div className='flex flex-col gap-3 mt-6'>
          <Button onClick={() => navigate("/purchase")}>Buy gate entry Ticket</Button>
          <Button onClick={() => navigate("/purchase")}>Buy ticket for shows</Button>
          <Button onClick={() => navigate("/purchase")} >Buy gate entry and show ticket combo</Button>

        </div>




      </div>
    </>
  )
}

export default BuyTicket