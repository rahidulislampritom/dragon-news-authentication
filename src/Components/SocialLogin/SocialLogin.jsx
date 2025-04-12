import React from 'react';
import { FaGithub, FaGoogle} from 'react-icons/fa';


const SocialLogin = () => {
    return (
        <div>
            <div className='mb-8'>
                <h2 className='text-[20px] font-bold mb-3'>Login With</h2>
                <button className='btn bg-base-100 w-full border border-black mb-2'><span><FaGoogle /></span>Login with Google</button>
                <button className='btn bg-base-100 w-full border border-black'><span><FaGithub /></span>Login with Github</button>
            </div>
 
        </div>
    );
};

export default SocialLogin;