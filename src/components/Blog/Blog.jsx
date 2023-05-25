import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'flowbite-react';
import React from 'react';
import { FaFilePdf } from "react-icons/fa";
import PDFFile from '../BlogPdf/BlogPdf';

const Blog = () => {
    return (
        <div className='bg-gray-200 w-11/12 mx-auto rounded-lg'>

            <div className='pt-2 pl-2 absolute'>
            <PDFDownloadLink document={<PDFFile />} filename="FORM">
                {({ loading }) => (loading ? <Button color='dark'>Loading Document...</Button> : <Button color='dark'>Download As Pdf</Button>)}
            </PDFDownloadLink>
              
            </div>

            <div className='flex justify-center items-center mb-5'>
                <h2 className='text-5xl font-semibold text-center underline italic'>Q/A</h2>

            </div>

            <div>
                <div className='px-4 pt-3'>
                    <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> What's differences between uncontrolled and controlled components?</h2>
                    <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> In software engineering, uncontrolled components operate independently, while controlled components operate within a higher-level system or framework. Uncontrolled components are self-contained and manage their own behavior and state, whereas controlled components rely on external factors to determine their behavior and state. Examples of uncontrolled components include standalone functions or modules, while examples of controlled components include user interface elements or data access layers that depend on a higher-level application or framework to operate. The choice between uncontrolled and controlled components depends on the specific requirements and constraints of the software project.</p>
                </div>
                <div className='px-4 pt-3'>
                    <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> How to validate React props using PropTypes?</h2>
                    <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> React is a popular JavaScript library for building user interfaces. PropTypes is a feature in React that allows developers to validate the type and shape of props that are passed to a component. To use PropTypes, developers must first import the PropTypes module from the 'prop-types' package. Once imported, they can define the propTypes of a component by adding a propTypes object to the component's code. The propTypes object contains key-value pairs, where the keys correspond to the names of the props, and the values correspond to the expected type of the prop. If a prop is passed to the component that does not match the specified PropTypes, a warning message will be logged to the console. Using PropTypes can help catch errors and ensure that components are receiving the expected props, which can improve the overall quality of a React application.</p>
                </div>
                <div className='px-4 pt-3'>
                    <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> What's the difference between nodejs and express js?</h2>
                    <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> Node.js is a runtime environment for JavaScript that allows developers to run JavaScript code outside of a web browser. It provides a set of built-in modules and APIs for performing various tasks such as file system operations, network communication, and more. Express.js, on the other hand, is a web framework built on top of Node.js that provides a set of features and tools for building web applications and APIs.

                        While Node.js provides the foundation for building JavaScript-based applications, it does not include any built-in tools or features specifically for building web applications. Express.js fills this gap by providing developers with a range of features and tools for building web applications and APIs, including middleware for handling requests and responses, routing, templating engines, and more.</p>
                </div>
                <div className='px-4 pt-3'>
                    <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> What is a custom hook, and why will you create a custom hook?</h2>
                    <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> In React, a custom hook is a JavaScript function that uses built-in hooks to provide a specific functionality to a React component. Custom hooks allow developers to reuse stateful logic between components and avoid duplicating code.

                        Creating a custom hook is useful when you find yourself writing similar code in multiple components. By creating a custom hook, you can extract the common logic into a separate function, which can then be reused in multiple components. For example, if you have several components that need to fetch data from an API and manage the loading and error states, you can create a custom hook that encapsulates this logic. This can help improve code readability, reduce code duplication, and make it easier to maintain and update your codebase.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;