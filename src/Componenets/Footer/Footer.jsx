import React from 'react'
import FooterSection from './FooterSection';
import NewsLetter from '../NewsLetter/NewsLetter';

function Footer() {
  return (
    <>
        <div className= 'relative w-full -bottom-36 z-[100] h-auto'>
                <NewsLetter />
            </div>
        <div className='relative w-full h-auto bg-green-300 py-56'>

            <div className='absolute bottom-5 w-[80%] h-auto left-[10%] p-5 flex flex-row justify-between'>
                <div>
                <FooterSection  data="" obj={[]} footerIconLogo={true}      />
                </div>
                
                <div>
                 <FooterSection  data="Our Desitinations" obj={["Canada", "Alaska", "France", "Island"]} />
                </div>

                <div>
                <FooterSection  data="Our Activities" obj={["Northern Lights", "Cruising & sailing", "Multi-activities", "Kayaing"]} />
                </div>

                <div>
                <FooterSection  data="Travel Blogs" obj={["Bali Travel Guide", "Sri Lanks Travel Guide", "Peru Travel Guide", "Bali Travel Guide"]} />  
                </div>

                <div>
                <FooterSection  data="About Us" obj={["Our Story", "Work with us"]} />  
                </div>

            </div>
        </div>
    
    </>
  )
}

export default Footer