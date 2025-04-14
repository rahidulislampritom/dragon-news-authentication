import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
    </>
    return (

        <div className='flex flex-col-reverse md:flex-row items-center mt-9'>

            <div className='md:w-1/3'>

            </div>

            <div className='space-x-4 md:w-1/3 flex justify-center mb-10 md:mb-0 nav-links'>
                {links}
            </div>

            <div className='flex  items-center justify-center gap-2 md:w-1/3 '>
                <span><CgProfile className='text-4xl' /></span>``
                <Link to={'/auth/login'} className='btn btn-neutral rounded-none px-10 py-4 text-lg'>Login</Link>
            </div>

        </div>

    );
};

export default Navbar;  