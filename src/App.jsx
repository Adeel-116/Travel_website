import "./App.css";
import Header from "./Componenets/Header/Header";
import bgImage from "./assets/logo/banner.png"; 
import BackgroundImage from "./Componenets/BackgroundImage"; 
import Form from "./Componenets/Form/Form"
import img from "./assets/Section2/img1.png"
import Card from "./Componenets/Card"
import CardBooking from "./Componenets/CardBooking";
import bgFlight from "./assets/Section2/Flights.png"
import bgHotel from "./assets/Section2/Hotels.png"



function App() {
  return (
    <>
       <div className="w-full h-screen p-5" style={{backgroundColor: "#FAFBFC"}}>
      <div className="w-full h-auto rounded-3xl relative">
        <BackgroundImage imageUrl={bgImage} className="rounded-3xl">
          {/* Overlay div */} 
           {/* <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-black bg-opacity-30 z-0"></div> */}
          
          {/* Header */}
          <div className="w-full p-5 relative z-10">
            <Header />
          </div>

          {/* Content */}
          <div className="w-full h-1/2 flex justify-center items-center relative z-10">
            <div className="w-1/2 h-auto py-12 text-center tracking-tighter leading-[60px]">
              <h1 className="text-[2.5rem] text-white mx-auto font-semibold">Helping Others</h1>
              <h1 className="text-[4.5rem] text-white font-semibold">LIVE & TRAVEL</h1>
              <p className="text-white text-lg font-medium">Special Offer to suit your plan</p>
            </div>
          </div>

            {/* Foam */}

            <div className="w-[90%] h-auto bg-white  z-10 mx-auto rounded-3xl p-5 mt-44">
              <div className="px-4">
                <Form />
              </div>
            </div>


        </BackgroundImage>
      </div>
    
       </div>


       <div className="w-full h-screen">
        <div className="w-[90%] mx-auto p-5">
          <div>
          <h1 className="text-3xl text-black font-semibold">Plan your perfect trip</h1>
          <p className="text-gray-500">Search Flights & Places Hire to our most popular destinations</p>
          </div>
        

        <div className="mt-6 flex flex-wrap justify-between gap-10 ">
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

        <div className="w-full h-auto p-5 mt-6">
            <div className="flex justify-center gap-10">
              <CardBooking  backgroundURL={bgFlight} data="Flights" btnText="Show Flights" para="Search Flights & Places Hire to our most popular destinations"/>
              <CardBooking  backgroundURL={bgHotel} data="Hotels" btnText="Show Hotels" para="Search Flights & Places Hire to our most popular destinations"/>
            </div>
        </div>


  
        </div>



        </div> 

      
    </>
  );
}

export default App;
