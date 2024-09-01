import React from 'react'
import MSG from './MSG'
import Button from './Button'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../../store/globalSlice'
// import { lang } from '../../../generalSlice'
import { useNavigate } from 'react-router-dom'

function Home() {
  

  const navigate = useNavigate()
  const dispatch = useDispatch();

  console.log(useSelector(state => state.global.language))
  const handleLang = (language) => {
    dispatch(lang(language))
    navigate("/page2")

  }
  const now = new Date();
  const formattedTime = now.toLocaleString();

  return (
    <>
      <div className='px-4 py-4'>
        <div className='text-neutral-600 text-sm'>{formattedTime}</div>
        <MSG>Hi, Welcome to Indian Tech Museum
          I am Movi, your Virtual Assistant.
          Please choose your language.</MSG>
        <div className='flex flex-col gap-3 mt-6'>
          <Button onClick={() => handleLang("English")}>English</Button>
          <Button onClick={() => handleLang("Hindi")}>हिन्दी</Button>
          <Button onClick={() => handleLang("Gujrati")} >ગુજરાતી</Button>
          <Button onClick={() => handleLang("Tamil")}>தமிழ்</Button>
          <Button onClick={() => handleLang("Marati")}>मराठी</Button>

        </div>


      </div>

    </>

  )
}

export default Home