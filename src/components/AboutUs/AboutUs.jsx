import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="lg:text-5xl text-3xl text-center mt-[50px]">About Us</div>

            <div className="mt-[50px]">
                <div className="">
                    <div className="lg:flex justify-center items-center gap-10">
                    <p className='lg:w-[40%] text-2xl'>
                        Welcome to our website, your go-to destination for all things culinary! Our mission is to bring together food lovers and cooking enthusiasts from all around the world, and provide them with an extensive collection of recipes and chef information to help them elevate their culinary skills and creativity.</p>
                        <div className="">
                            <img className='w-[100%]' src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                        </div>

                        <div className="lg:flex flex-row-reverse justify-center items-center mt-[50px] gap-10">
                    <p className='lg:w-[40%] text-2xl '>
                    Our team of dedicated foodies and experienced chefs is passionate about sharing their knowledge and expertise with you, and they have carefully curated a diverse selection of recipes to suit all tastes and dietary requirements. From classic comfort foods to exotic international dishes, we've got you covered!</p>
                        <div className="">
                            <img className='w-[100%]' src="https://images.unsplash.com/photo-1565608087341-404b25492fee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                        </div>
                    <p></p>


                        <div className="text-2xl text-center w-[95%] bg-gray-100 mx-auto rounded-lg p-10 mt-[30px]">
                    <p>But we don't just stop at recipes. We believe that food is more than just sustenance - it's an art form that should be celebrated and appreciated. That's why we also feature a wealth of information about the chefs behind the recipes, including their backgrounds, cooking philosophies, and techniques. You'll gain insights into their creative processes and get inspired to experiment with new flavors and ingredients.</p>

                    <p>Whether you're a seasoned home cook or a curious beginner, we invite you to join our community and explore the wonderful world of food with us. We hope you'll find our website to be a valuable resource and a source of inspiration for all your culinary adventures.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;