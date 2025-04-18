
import { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {

    const { user, authSignOut } = useContext(AuthContext);
    // console.log(user)
    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
    </>


    // console.log(user)

    // authSignOut()
    //     .then((result) => {
    //         console.log('sighOut successful', result)


    //     })
    //     .catch((error) => {
    //         console.log('SignOutError', error.message)
    //     })

    return (

        <div className='flex flex-col-reverse md:flex-row items-center pt-9'>

            <div className='md:w-1/3'>

            </div>

            <div className='space-x-4 md:w-1/3 flex justify-center mb-10 md:mb-0 nav-links'>
                {links}
            </div>

            {
                user
                    ? <div className='flex  items-center justify-center gap-2 md:w-1/3 '>
                        {
                            user && user?.email
                                ? <div className='flex items-center gap-2'>
                                    <p className='btn btn-accent rounded-4xl'>{user.displayName}</p>
                                    <img className='w-[60px] h-[60px] rounded-full object-cover' src={user.photoURL} alt="" />
                                </div>
                                : <span><CgProfile className='text-4xl' /></span>
                        }

                        <button onClick={authSignOut} className='btn btn-neutral rounded-none px-10 py-4 text-lg'>Logout</button>
                    </div>

                    : <div className='flex  items-center justify-center gap-2 md:w-1/3 '>
                        <span><CgProfile className='text-4xl' /></span>
                        <Link to={'/auth/login'} className='btn btn-neutral rounded-none px-10 py-4 text-lg'>Login</Link>
                    </div>


            }

            {/* <div className='flex  items-center justify-center gap-2 md:w-1/3 '>
                <span><CgProfile className='text-4xl' /></span>
                <Link to={'/auth/login'} className='btn btn-neutral rounded-none px-10 py-4 text-lg'>Login</Link>
            </div> */}

        </div>

    );
};

export default Navbar;  