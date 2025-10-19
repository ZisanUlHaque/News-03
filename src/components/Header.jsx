import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 mt-3'>
            <img src={logo} alt="" className='w-[350px]'/>
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),"EEEE ,MMMM MM, yyy")}</p>
        </div>
    );
};

export default Header;