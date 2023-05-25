import { Footer } from 'flowbite-react';
import React from 'react';

const Credits = () => {
    return (
        <div className='max-w-[1280px] mx-auto border-t-2 mt-[50px]'>
<Footer container={true}>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
     <div className='font-semibold text-3xl'>
         <i>ItalianFoodies</i>
     </div>
      <Footer.LinkGroup className='lg:flex-row flex flex-col justify-center items-center'>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="ItalianFoods™"
      year={2022}
    />
  </div>
</Footer>
        </div>
    );
};

export default Credits;