import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleChef from '../SingleChef/SingleChef';
import SingleRecipes from '../SingleRecipes/SingleRecipes';

const ChefDetails = () => {
    window.scroll(0,0)
    const params=useParams()
    const ChefDetails=useLoaderData()

    const currentChef=ChefDetails.chefs.filter(ch => ch.id==params.id)

    const { name, picture, years_of_experience, id, likes, recipes,bio } = currentChef[0]

    console.log(currentChef)
    





    return (
        <div>
            <div className="lg:text-5xl text-center mt-[50px]">Chef's Details And Recipes</div>
            <div className="mt-[30px] flex flex-col justify-center items-center bg-gray-200 p-5">
                <div className="mx-auto">
                    <img src={picture} alt="" />
                </div>

                    <div className="lg:text-5xl">
                        <p>{name}</p>
                    </div>
                    <div className="text-gray-500 text-2xl">
                        <p>years of experience:{years_of_experience}</p>
                    </div>
                    <div className="text-2xl font-semibold">
                        <p>Number of recipes available:{recipes.length}</p>

                    </div>
                    <div className="text-xl font-semibold text-gray-500">
                        <p>Total Likes:{likes}</p>

                    </div>
                 
            </div>
            <div className="border-t-2 border-b-2 p-5 mt-5">
                <p><span className='text-2xl font-semibold'>Chef's Bio:</span><span className='text-xl text-gray-500'>{bio}</span></p>
            </div>

            <div className="text-3xl text-center mt-[30px]"><u>Here Are the Chef's recipes</u></div>

            {
                recipes.map(recipe => <SingleRecipes
                recipe={recipe}
                ></SingleRecipes>)
            }
            
        </div>









    );
};

export default ChefDetails;