import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MSG from './component/MSG'
import Button from './component/Button'
import { Outlet } from 'react-router-dom'



function App() {
  // const [language , setLanguage] = useState("null")
  // console.log(language)
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='bg-white w-96 h-fit'>
          <div className='bg-blue-500 text-white flex flex-col items-center'>
            <p className='text-xl font-bold'>Movi</p>
            <p className='text-md'>Your Virtual Assistant</p>
          </div>
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default App
