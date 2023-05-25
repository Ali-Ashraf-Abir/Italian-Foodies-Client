import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Faq from '../Faq/Faq';
import SingleChef from '../SingleChef/SingleChef';
import WhyUs from '../WhyUs/WhyUs';
import { lazy } from 'react';

const Home = () => {

    const chefData=useLoaderData()

    

    

    return (
        <div className='max-w-[1280px] mx-auto mt-[50px] '>
            <div className="flex lg:flex-row-reverse flex-col justify-center items-center gap-10 bg-gray-200 p-10">
            <img className='lg:w-[60%] w-[100%]' src='https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></img>
            <div className="">
                <h1 className='lg:text-4xl sm:text-2xl font-semibold'>Learn from the master chefs around <span className='text-blue-500 '>Italy</span></h1>
                <p className='lg:text-xl sm:text-xl text-gray-500'>Our website provides recipes and other cooking infos from users all around the italy,here 
                    you will find all the informations you need for improving your cooking skills and every other 
                    sectors you might need help
                </p>
                
            </div>
            </div>

            <div className="text-3xl mt-[80px] mb-[60px] text-center font-semibold"><u>Our Chefs And their Recipes</u></div>
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-5 ml-auto w-[80%] mx-auto">
                {
                    chefData.chefs.map(chef=><SingleChef
                    key={chef.id}
                    chef={chef}></SingleChef>)
                }
            </div>

            <WhyUs></WhyUs>

            <Faq></Faq>
        </div>
    );
};

export default Home;