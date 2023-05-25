import { Accordion } from 'flowbite-react';
import React from 'react';

const Faq = () => {
    return (
        <div>

            <div className="lg:text-5xl text-3xl font-bold text-center mt-[70px]">FAQ</div>
            <div className="">
      
            <div className="mt-[50px]">
            <div className="lg:text-3xl text-xl">
                <p>Here Are Some Frequently Asked Questions From Our Users</p>
            </div>
            <Accordion collapseAll={true}>
  <Accordion.Panel>
    <Accordion.Title>
      Who writes the recipes here?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       The recipes written here are created by the chefs themselves or someone who has worked close with the chef in their career,our sources are very authentic and accurate
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      Is this service free?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       Yes the service is absolutely free and will always be free.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      Is the website updated regularly?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Yes the website is updated regularly and our team is working hard everyday to gather more and more info about the topics and recipes
      </p>
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
            </div>

            </div>
        </div>
    );
};

export default Faq;