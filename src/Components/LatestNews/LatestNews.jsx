import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div>
            <div className='flex items-center gap-5 bg-[#F3F3F3] p-3'>
                <h2 className='btn bg-[#D72050] text-white'>Latest</h2>
                <Marquee pauseOnHover speed={100}>
                    <Link><p className='mr-10'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as Match Highlights....</p></Link>


                    <Link><p className='text-purple-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos eius atque molestiae ducimus! Tempore voluptates explicabo voluptatem aperiam, neque laudantium.</p></Link>
                </Marquee>

            </div>
        </div>
    );
};

export default LatestNews;