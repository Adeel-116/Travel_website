import "./App.css";
import Header from "./Componenets/Header/Header";
import bgImage from "./assets/logo/banner.png";
import BackgroundImage from "./Componenets/BackgroundImage";
import Form from "./Componenets/Form/Form";
import img from "./assets/Section2/img1.png";
import Card from "./Componenets/Card";
import CardBooking from "./Componenets/CardBooking";
import bgFlight from "./assets/Section2/Flights.png";
import bgHotel from "./assets/Section2/Hotels.png";
import Slider from "./Componenets/Slider/Slider";
import NewsLetter from "./Componenets/NewsLetter/NewsLetter";
import Footer from "./Componenets/Footer/Footer";

function App() {
  return (
    <>
      <div
        className="sm:w-full h-auto sm:p-4 p-2"
        style={{ backgroundColor: "#fafbfc" }}
      >
        <div className="w-full h-screen relative">
          <BackgroundImage imageUrl={bgImage} className="sm:rounded-3xl rounded-lg">
            
         {/* <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-black bg-opacity-30 z-0"></div> */}

            <div className="flex flex-col sm:gap-y-16 gap-y-14">
            <div className="w-full p-5 relative z-10">
              <Header />
            </div>

            {/* Content */}
            <div className="w-full h-1/2 flex justify-center items-center relative z-10">
              <div className="xl:w-1/2 w-full h-auto py-12 text-center flex flex-col leading-tight">
                <h1 className="text-sm  xl:text-[2.5rem]  sm:text-[2.1rem] text-white mx-auto font-semibold">
                  Helping Others
                </h1>
                <h1 className="text-[2.2rem] xl:text-[4.5rem] sm:text-[3.7rem] text-white font-semibold">
                  LIVE & TRAVEL
                </h1>
                <p className="text-white text-sm xl:text-lg  md:text-sm font-medium">
                  Special Offer to suit your plan
                </p>
              </div>
            </div>


              <div >
                 <Form /> 
              </div>
              </div>
          
          </BackgroundImage>
        </div>




        {/* Page 2 */}
        <div className="w-full h-auto">
        <div className="sm:w-[90%] bg-red-300 w-full mx-auto md:p-4 p-2">
          <div>
            <h1 className="sm:text-3xl text-2xl text-black font-semibold">
              Plan your perfect trip
            </h1>
            <p className="text-gray-500 text-[11px] sm:text-sm">
              Search Flights & Places Hire to our most popular destinations
            </p>
          </div>

          <div className="mt-6 2xl:justify-center 2xl:gap-10 flex flex-wrap sm:justify-evenly justify-center gap-4">
            <Card imageUrl={img} Name="Istanbul, Turkey" />
            <Card imageUrl={img} Name="Istanbul, Turkey" />
            <Card imageUrl={img} Name="Istanbul, Turkey" />
            <Card imageUrl={img} Name="Istanbul, Turkey" />
            <Card imageUrl={img} Name="Istanbul, Turkey" />
            <Card imageUrl={img} Name="Istanbul, Turkey" />
            <Card imageUrl={img} Name="Istanbul, Turkey" />
            <Card imageUrl={img} Name="Istanbul, Turkey" />
            <Card imageUrl={img} Name="Istanbul, Turkey" />
          </div>


          <div className="w-full h-auto p-5 mt-6 bg-red-300">
            <div className=" flex justify-center flex-wrap bg-blue-300">
              <CardBooking
                backgroundURL={bgFlight}
                data="Flights"
                btnText="Show Flights"
                para="Search Flights & Places Hire to our most popular destinations"
              />
              <CardBooking
                backgroundURL={bgHotel}
                data="Hotels"
                btnText="Show Hotels"
                para="Search Flights & Places Hire to our most popular destinations"
              />
            </div>
          </div>            


          </div>
      </div>

   

         
{/* 
          }


          {/* <div className="Slider">
              <Slider />
          </div> */}
       

        {/* <div className="">
        <div className="">
            <Footer />
          </div>
        </div> */}
        </div> 
    </>
  );
}

export default App;
