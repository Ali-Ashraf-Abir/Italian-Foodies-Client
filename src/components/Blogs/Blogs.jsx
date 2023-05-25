import { Button } from 'flowbite-react';
import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import PDFFile from '../BlogPdf/BlogPdf';

const Blogs = () => {



    return (

        <div>


            <div className="text-center w-[20%] mx-auto">
            <PDFDownloadLink document={<PDFFile />} filename="FORM">
                {({ loading }) => (loading ? <Button color='dark'>Loading Document...</Button> : <Button color='dark'>Download As Pdf</Button>)}
            </PDFDownloadLink>
            </div>


        </div>
    );
};

export default Blogs;