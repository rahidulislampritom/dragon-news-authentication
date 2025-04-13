import React, { useState } from 'react';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";


const NewsCard = ({singleNews}) => {
    
    const {
        author: { name, published_date },
        details,
        image_url,
        rating: { number },
        title,
        total_view
    } = singleNews;

    // console.log(singleNews)


    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="card bg-base-100 shadow-md mb-6 border border-[#E7E7E7]">
            {/* Top Bar - Author Info */}
            <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={image_url} alt="" />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-gray-500">{published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-500 text-lg">
                    <FaRegBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* Title & Image */}
            <div className="card-body pt-2">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <figure className="my-4">
                    <img src={image_url} alt="News" className="rounded-lg" />
                </figure>

                {/* Details */}

                <p className="text-sm text-gray-700">
                    {
                        details.length > 250
                            ? (
                                <>
                                    {isExpanded
                                        ? details
                                        : `${details.slice(0, 250)}...`}
                                    <span className="text-orange-500 font-semibold ml-1 cursor-pointer"
                                        onClick={toggleReadMore}>

                                        {isExpanded ? "Read Less" : "Read More"}

                                    </span>
                                </>
                            )
                            : details
                    }
                </p>
            </div>

            {/* Footer - Rating & Views */}
            <div className="card-actions px-4 pb-4 justify-between items-center border-t border-[#E7E7E7] pt-3 text-sm text-gray-600">
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="ml-1 text-gray-700 font-medium">{number}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />

                    <span>{total_view}</span>

                </div>
            </div>
        </div>
    );
};

export default NewsCard;