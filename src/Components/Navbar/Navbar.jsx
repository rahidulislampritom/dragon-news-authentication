import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
    </>
    return (

        <div className='flex items-center mt-9'>

            <div className='w-1/3'>

            </div>

            <div className='space-x-4 w-1/3 flex justify-center'>
              {links}
            </div>

            <div className='flex  items-center justify-end gap-2 w-1/3 '>
                <span><CgProfile className='text-4xl' /></span>
                <button className='btn btn-neutral rounded-none px-10 py-4 text-lg'>Login</button>
            </div>

        </div>

    );
};

export default Navbar;