import React from 'react';

const WhyUs = () => {
    return (
        <div className='w-[100%] mt-[100px]'>
            <div className="text-4xl text-center font-semibold">
                Why Us?
            </div>
            <div className="mt-[50px]  relative h-[500px] bg-[url('https://images.unsplash.com/photo-1505682750263-f3f9e519c565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover">
           <div className="bg-[rgb(0,0,0,0.6)] w-[100%] z-5 absolute h-[500px]">
               <div className="flex justify-center items-center mt-[70px]">
               <div className="w-[40%] border-r-2 mr-5"><p className='  lg:text-3xl text-xl text-center font-semibold text-white'>We have the most authentic source of the recipes and chefs</p>
               <div className='lg:text-2xl text-md text-white mt-[10px]' >
                    <ol type="1">
                        <li className='mt-2'>1.We Collect Our Recipes From Most Authentic source</li>
                        <li className='mt-2'>2.Chefs all over the italy is connected with us</li>
                        <li className='mt-2'>3.we are free and reliable</li>

                    </ol>
                </div>
               
               
               </div>
              
                
                <div className="lg:text-3xl text-xl text-white w-[40%] border-r-2"><p>Trusted By More Than 30000+ Users Across the globe</p></div>
           </div>
           </div>
            </div>
        </div>
    );
};

export default WhyUs;