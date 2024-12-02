import React from "react";
import {
  Banner,
  Map,
  London,
  Paris,
  Columbia,
  Melbourne,
  Nature1,
  Nature2,
  Nature3,
  Nature4
} from "../../Componenets/ImageLink";
import {
  Header,
  BackgroundImage,
  Form,
  FlightDetailsPageCard,
  TextContent,
  FlightBookButton,
  Footer
} from "../../Componenets/ComponentLink";
import { Link } from "react-router-dom";

function FlightDetails() {
  return (
    <>
      <div className="w-full h-auto bg-gray-500">
        <header>
          <Header />
        </header>
        <main className="w-full h-auto">
          <BackgroundImage imageUrl={Banner}>
            <div className="content 2xl:w-1/2 md:w-2/3 flex flex-col lg:p-24 sm:p-10 px-4 py-16">
              <div>
                <h1 className="2xl:w-[82%] sm:w-[80%] w-[80%] leading-tight text-[2.2rem] xl:text-[4rem] sm:text-[3.2rem] text-white font-semibold">
                  Make your travel wishlist, we’ll do the rest
                </h1>
                <p className="text-white text-[15px] sm:text-2xl">
                  Special offers to suit your plan
                </p>
              </div>
            </div>
            <div>
              <Form />
            </div>
          </BackgroundImage>
        </main>
      </div>

      <div className="mt-16 section2 w-full h-auto">
        <TextContent
          heading="Let's go places together"
          paragraph="Discover the latest offers and news and start planning your next trip with us."
          button={true}
        />
        <div className="w-full h-auto">
          <img className="w-full " src={Map} alt="" />
        </div>
      </div>

      <div className="h-auto w-full">
        <TextContent
          heading="Fall into travel"
          paragraph="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
          button={true}
        />
        <div className="2xl:w-[90%] lg:w-[95%] w-full mx-auto h-auto sm:px-6 px-2 flex lg:justify-between justify-center  xl:gap-2 lg:gap-1 md:gap-x-9 sm:gap-x-3 gap-x-4 flex-wrap">
          <FlightDetailsPageCard
            countryName="Melbourne"
            pictureUrl={Melbourne}
            para="An Amazing journey"
            price="700"
          />
          <FlightDetailsPageCard
            countryName="Paris"
            pictureUrl={Paris}
            para="A Paris Adventure"
            price="600"
          />
          <FlightDetailsPageCard
            countryName="London"
            pictureUrl={London}
            para="Eye Adventure"
            price="350"
          />
          <FlightDetailsPageCard
            countryName="Columbia"
            pictureUrl={Columbia}
            para="Amazing Street"
            price="700"
          />
        </div>
      </div>

      <div className="w-full h-auto">
        <TextContent
          heading="Fall into travel"
          paragraph="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
          button={true}
        />

        <div className="2xl:w-[90%] mx-auto h-auto p-2 flex md:flex-row flex-col flex-wrap">
          <div className="md:w-1/2 w-full h-auto  p-2">
            <div className="md:w-full sm:w-[80%] w-[100%] mx-auto h-auto bg-customGreen 2xl:p-7 lg:p-6 sm:p-4 rounded-sm p-2 sm:rounded-2xl">
              
                <div className="w-[100%] h-auto flex flex-row">

                  <div className="lg:w-[80%] w-[80%]" >

                  <h1 className="sm:w-[80%] w-[80%] text-black 2xl:text-[4rem] lg:text-[2rem] md:text-[1.7rem] text-[1.5rem] sm:text-[2.2rem] leading-tight font-semibold">
                    Backpacking Sri Lanka
                  </h1>

                  </div>

                  <div className="w-[20%] flex justify-end h-fit ">

                    {/* Button  */}
                  <div className="w-fit bg-white sm:rounded-lg rounded-sm lg:py-3 lg:px-4 md:px-4 md:py-3  sm:py-3 sm:px-5 p-2">
                    <h1 class="text-black font-medium md:text-[12px] sm:text-[10px] text-[7px]">From</h1>
                    <h2 className="2xl:text-lg md:text-[12px] sm:text-[10px] font-semibold text-[7px]">
                      $700
                    </h2>
                  </div>
``
                  </div>


                </div>


                {/* Paragraph */}
                <div className="w-[100%]">
      
                  <p className="mt-1 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-lg text-gray-900 font-medium">
                    Traveling is a unique experience as it's the best way to
                    unplug from the pushes and pulls of daily life. It helps us
                    to forget about our problems, frustrations, and fears at
                    home. During our journey, we experience life in different
                    ways. We explore new places, cultures, cuisines, traditions,
                    and ways of living.
                  </p>

                </div>

                <div className="mt-24">
                <Link to="/booking-details">
                  <FlightBookButton />
                  </Link>
                </div>

              </div>
        
          </div>

          <div className="md:w-1/2 w-full h-auto flex-col flex sm:flex-row gap-5 sm:p-2 sm:px-4 p-2 flex-wrap">
            <div className="sm:w-[47%] w-[100%] h-auto ">
              <img src={Nature1} className="w-full h-full bg-cover bg-center" alt="" />
            </div>
            <div className="sm:w-[47%] w-[100%] h-auto">
            <img src={Nature2} className="w-full h-full bg-cover bg-center" alt="" />
            
            </div>
            <div className="sm:w-[47%] w-[100%] h-auto">
            <img src={Nature3}  className="w-full h-full bg-cover bg-center" alt="" /></div>
            <div className="sm:w-[47%] w-[100%] h-auto ">
            <img src={Nature4} className="w-full h-full bg-cover bg-center" alt="" /></div>
          </div>

        </div>
      </div>
 
      {/* Footer */}
      <div>
          <Footer />
        </div>
    </>
  );
}

export default FlightDetails;
