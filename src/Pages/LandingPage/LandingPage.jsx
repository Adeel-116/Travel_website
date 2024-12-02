import React from "react";


import {
  bgFlight,
  bgHotel,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  landingBanner,
  Landinglogo,
} from "../../Componenets/ImageLink";

import {
  Slider,
  Footer,
  Form,
  Card,
  CardBooking,
  BackgroundImage,
  Header,
} from "../../Componenets/ComponentLink";

function LandingPage() {
  return (
    <>
      <div className="w-full bg-lightWhite">
        <div className="sm:w-full sm:p-4 ">
          <div className="w-full xl:h-screen md:h-auto  relative">
            <BackgroundImage
              imageUrl={landingBanner}
              className="sm:rounded-3xl rounded-lg"
            >
              <div className="flex flex-col sm:gap-y-16 gap-y-14 relative">
                <Header
                
                />

                {/* Content */}
                <div className="relative z-[100] w-full h-1/2 flex justify-center items-center">
                  <div className="xl:w-1/2 w-full h-auto py-12 text-center flex flex-col leading-tight">
                    <h1 className="text-[17px]  xl:text-[2.5rem]  sm:text-[2.1rem] text-white mx-auto font-semibold">
                      Helping Others
                    </h1>
                    <h1 className="text-[2.5rem] xl:text-[4.5rem] sm:text-[3.7rem] text-white font-semibold">
                      LIVE & TRAVEL
                    </h1>
                    <p className="text-white text-[17px] xl:text-lg  md:text-sm font-medium">
                      Special Offer to suit your plan
                    </p>
                  </div>
                </div>

                <div>
                  <Form />
                </div>

                {/* <div class="absolute w-full h-full" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}></div> */}
              </div>


              
            </BackgroundImage>
          </div>

          {/* Page 2 */}
          <div className="xl:mt-0 mt-20 w-full ">
            <div className="sm:w-[90%] w-full mx-auto md:p-4 p-2">
              <div>
                <h1 className="sm:text-3xl text-2xl text-black font-semibold">
                  Plan your perfect trip
                </h1>
                <p className="text-gray-500 text-[11px] sm:text-sm">
                  Search Flights & Places Hire to our most popular destinations
                </p>
              </div>

              <div className="sm:py-10 mt-4 mb-5 w-[100%] p-3 2xl:gap-10 flex flex-wrap sm:justify-evenly gap-4">
                <Card imageUrl={img1} Name="Istanbul, Turkey" />
                <Card imageUrl={img2} Name="Sydney, Australia" />
                <Card imageUrl={img3} Name="Baku, Azerbaijan" />
                <Card imageUrl={img4} Name="Malé, Maldives" />
                <Card imageUrl={img5} Name="Paris, France" />
                <Card imageUrl={img6} Name="New York, US" />
                <Card imageUrl={img7} Name="London, UK" />
                <Card imageUrl={img8} Name="Tokyo, Japan" />
                <Card imageUrl={img9} Name="Dubai, UAE" />
              </div>

              <div className="w-full h-auto mt-6 flex flex-wrap gap-6 justify-center">
                <CardBooking
                  backgroundURL={bgFlight}
                  data="Flights"
                  para="Search Flights & Places Hire to our most popular destinations"
                  btnText="Show Flight"
                />
                <CardBooking
                  backgroundURL={bgHotel}
                  data="Hotels"
                  para="Search Hotels & Places Hire to our most popular destinations"
                  btnText="Show Hotels"
                />
              </div>

              <div className="Slider">
                <Slider />
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
