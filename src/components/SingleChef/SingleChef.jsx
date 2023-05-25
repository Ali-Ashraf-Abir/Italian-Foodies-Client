import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { lazy } from 'react';

const SingleChef = (props) => {

    const { name, picture, years_of_experience, id, likes, recipes } = props.chef
    

    const pics=lazy(()=>picture)
    return (
        <div>
            {/* <div className="flex flex-col bg-gray-200 p-5 mx-auto">
                <div className="block">
                    <img className='w-[400px] h-[400px]' src={picture} alt="" />
                </div>
                <div className="lg:text-3xl">
                    <p>{name}</p>
                </div>
                <div className="text-xl">
                <p>years of experience:{years_of_experience}</p>
                </div>
            </div> */}

            <div className="max-w-sm">
                <Card className='lazyload' loading='lazy'  imgSrc={picture}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Years of experience:{years_of_experience}
                    </p>
                    <p className='text-bold'>
                        likes: <span className='font-semibold'>{likes}</span>
                    </p>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        Number Of Recipes:{recipes.length}
                    </p>
                    <div className="">
                      <Link to={`chef/${id}`}>  <Button color="dark">
                           View Recipes
                        </Button></Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default SingleChef;