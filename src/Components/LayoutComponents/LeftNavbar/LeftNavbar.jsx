import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {

    const [categoriesData, setCategoriesData] = useState([])


    // console.log(categoriesData)

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategoriesData(data.data.news_category));

    }, [])


    // category_id: "01"
    // category_name: "Breaking News"

    return (
        <div className=''>
            <h2 className='text-[20px] text-[#403F3F] font-semibold mb-5'>All Category</h2>
            <div className='flex flex-col  gap-3 '>
                {
                    categoriesData.map((category) =>

                        <NavLink to={`/category/${category.category_id}`} key={category.category_id}
                            className="text-[20px] text-[#9F9F9F] font-medium btn bg-base-100 border-none">
                            {category.category_name}
                        </NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;