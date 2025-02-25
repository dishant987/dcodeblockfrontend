import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <header className='flex h-[75px] items-center justify-between px-12 bg-[#000000]'>
            <div>
                <img src="/logodb-PhotoRoom 1.png" alt="logo" />
            </div>
            <Button name='Sign In' />


        </header>
    )
}

export default Header