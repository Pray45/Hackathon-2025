import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='w-screen bg-white py-2 border-b-3 border-black'>
        
        <ul className='hidden sm:flex w-full items-center justify-around'>
            
            <li className='font-anton leading-none py-1 text-[3vw]' >Code Arcade</li>
            
            <li>
                <ul className='flex font-anton text-[1.5vw] gap-10'>
                    <li className='cursor-pointer' >Home</li>
                    <li className='cursor-pointer' >Timeline</li>
                    <li className='cursor-pointer' >Rewards</li>
                    <li className='cursor-pointer' >Our Sponsors</li>
                </ul>
            </li>
            
            <Button text="Register Now" path="https://google.com"/>

        </ul>

        <ul className='flex sm:hidden w-full items-center justify-around'>

          <li>
            <img src="img/devfolio.svg" className='w-[8vw]' alt="" />
          </li>

          <li className='flex gap-2'>
            <img src="img/red.svg" className='w-10' alt="" />
            <h1 className='text-black text-[8vw] font-anton' >CodeArcade</h1>
            <img src="img/red.svg" className='rotate-180 w-10' alt="" />
          </li>

          <li>
            <img src="img/menu.svg" className='w-[8vw]' alt="" />
          </li>

        </ul>


    </div>
  )
}

export default Header