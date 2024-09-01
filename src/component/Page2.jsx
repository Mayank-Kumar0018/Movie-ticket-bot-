// import React from 'react'
import React from 'react'
import MSG from './MSG'
import Button from './Button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../../store/globalSlice'
import { useNavigate } from 'react-router-dom'

function Page2() {

  const navigate = useNavigate()




  const dispatch = useDispatch();
  // dispatch()
  console.log(useSelector(state => state.global.language))
  const language = useSelector(state => state.global.language);
  const handleLang = (language) => {
    dispatch(lang(language))



  }
  const now = new Date();
  const formattedTime = now.toLocaleString();

  return (
    <>
      <div className='px-4 py-4'>
        <div className='text-neutral-600 text-sm'>{formattedTime}</div>
        <MSG>{`You chose: ${language} . How can I assist you further?`}</MSG>
        <div className='flex flex-col gap-3 mt-6'>
          <Button onClick={() => navigate("/buy")}>Buy Ticket</Button>
          <Button onClick={() => navigate("/view")}>View Ticket</Button>
          <Button onClick={() => navigate("/cancel")}>Cancel Ticket</Button>
          <Button onClick={() => navigate("/help")} >Get help with your Ticket</Button>
          <Button onClick={() => navigate("/")}>Change language</Button>

        </div>


      </div>

    </>

  )


}

export default Page2