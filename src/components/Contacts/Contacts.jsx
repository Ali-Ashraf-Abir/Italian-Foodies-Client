import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const Contacts = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className="lg:text-4xl text-3xl mt-[50px] text-center">Contact Us</div>
            <div className="lg:flex justify-center items-center gap-10 mt-[20px]">
            <form action="" className='lg:w-[40%] bg-gray-200 p-10 rounded-lg mt-[50px]'>
                <div className="text-2xl text-center">Leave us a message</div>
                <div>
                    <div className="mt-5 mb-2 block">
                        <Label className='text-xl'
                            htmlFor="email4"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email4"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                    />
                </div>
                <div id="textarea">
                    <div className="mb-2 block">
                        <Label
                            className='text-xl'
                            htmlFor="comment"
                            value="Your message"
                        />
                    </div>
                    <Textarea
                        id="comment"
                        placeholder="Leave a comment..."
                        required={true}
                        rows={4}
                    />

                </div>
                <div className=" mt-[10px]">
                <Button className='w-[80%] mx-auto' color="dark">
                    Submit
                </Button>
                </div>
            </form>
            
            <div className="w-[50%] lg:w-[50%]">
                <div className="text-center text-2xl font-semibold mt-[50px]">Our Location</div>
            <iframe className='mt-[30px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.1415102457177!2d12.457335356124757!3d41.925464206813494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6094fde3fb35%3A0x8c3c5733a256dace!2sCuccuruc%C3%B9!5e0!3m2!1sen!2sbd!4v1683110287376!5m2!1sen!2sbd" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
        </div>
    );
};

export default Contacts;