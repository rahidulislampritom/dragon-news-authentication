import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Components/NewsCard/NewsCard';

const CategoryNews = () => {

    const { data: news } = useLoaderData();
    // console.log(news);
    return (
        <div>
            <div className='flex flex-col gap-3 p-4'>
          
                {
                    news.map((singleNews,index) => <NewsCard key={index} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;