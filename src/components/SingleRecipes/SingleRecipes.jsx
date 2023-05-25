import { Button, Spinner } from 'flowbite-react';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigation } from 'react-router-dom';
const SingleRecipes = ({ recipe }) => {
    
    const navigate=useNavigation()

    const { cooking_method, id, ingredients, rating, recipe_name,recipe_img } = recipe
    const notify = (event) => {
        toast('Added to Favorites');
        event.currentTarget.disabled=true
    
}


    return (
        <div className='mt-[40px] border-b-2 border-t-2 p-5 bg-gray-100'>
            <div>{navigate.state==='loading'&& <Spinner aria-label="Default status example" />}</div>
            <div className="text-2xl">{id}.Recipe Name:{recipe_name}</div>
            <div><img className='lg:w-[20%] w-[100%]' loading='lazy' src={recipe_img}></img></div>
            <div className="text-xl font-semibold text-gray-500"><p>Ratings: {rating}</p></div>
            <div className="text-xl mt-[10px]">
                <p> Ingredients: {ingredients.map(ingredient => <span>{ingredient},</span>)}</p>
            </div>

            <div className='mt-[10px]'>
                <p><span className='text-xl font-semibold'>Cooking Method:</span> <span className="text-gray-800 text-xl">{cooking_method}</span></p>
            </div>
           <button className='px-6 py-2 rounded-lg bg-green-500' onClick={notify}>Set As Favorite</button>
            <Toaster />
        </div>
    );
};

export default SingleRecipes;