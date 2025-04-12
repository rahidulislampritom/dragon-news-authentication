import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';

const RightNavbar = () => {
    return (
        <div>
            <div className='mb-8'>
                <h2 className='text-[20px] font-bold mb-3'>Login With</h2>
                <button className='btn bg-base-100 w-full border border-black mb-2'><span><FaGoogle /></span>Login with Google</button>
                <button className='btn bg-base-100 w-full border border-black'><span><FaGithub /></span>Login with Github</button>
            </div>

            <div>
                <h2 className='text-[20px] font-bold mb-5'>Find Us On</h2>
                <button className='text-[#706F6F] font-medium w-full text-start border border-[#E7E7E7] border-b-0 flex items-center gap-2 p-4 pl-4'><span className='text-xl text-[#3B599C]'><FaFacebook></FaFacebook></span>Facebook</button>
                <button className='text-[#706F6F] font-medium w-full text-start border border-[#E7E7E7] border-b-0  flex items-center gap-2 p-4 pl-4'><span className='text-xl text-[#58A7DE]'><FaTwitter></FaTwitter></span>Twitter</button>
                <button className='text-[#706F6F] font-medium w-full text-start border border-[#E7E7E7] flex items-center gap-2 p-4 pl-4'><span className='text-xl text-[#D82D7E]'><FaInstagram></FaInstagram></span>Instagram</button>
            </div>
        </div>
    );
};

export default RightNavbar;