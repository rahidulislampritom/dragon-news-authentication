import React from 'react';
import headLinePhoto from '../../assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div>
            <header>
                <div className='text-center mt-10'>
                    <img className='w-[471px]' src={headLinePhoto} alt="" />
                    <h2 className='text-lg text-gray-500 font-normal mt-5 mb-2.5'>Journalism Without Fear or Favour</h2>
                    {/* momentJs for showing time date  */}
                    <div className='text-lg text-gray-500 font-medium'>
                        {
                            moment().format("dddd, MMMM Do YYYY")
                        }
                    </div>

                   {/* showing  latest News field  */}
                </div>
            </header>
        </div>
    );
};

export default Header;      