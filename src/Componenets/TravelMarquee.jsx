import {
  FaPlane,
  FaGlobeAsia,
  FaUmbrellaBeach,
  FaHotel,
  FaHiking,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function TravelMarquee() {
  const marqueeItems = [
    { text: "Flight Booking", icon: <FaPlane /> },
    { text: "World Tours", icon: <FaGlobeAsia /> },
    { text: "Beach Holidays", icon: <FaUmbrellaBeach /> },
    { text: "Luxury Hotels", icon: <FaHotel /> },
    { text: "Adventure Trips", icon: <FaHiking /> },
    { text: "Travel Planning", icon: <FaMapMarkedAlt /> },
  ];

  return (
    <>
      <style>{`
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-rtl {
          animation: marquee-rtl 22s linear infinite;
        }

        .marquee-content {
          display: flex;
          width: max-content;
        }
      `}</style>

      <div className="w-full bg-gradient-to-r from-[#8DD3BB] via-[#5CC9A5] to-[#3AA885] py-8 overflow-hidden relative shadow-lg">
        <div className="animate-marquee-rtl whitespace-nowrap">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={`travel-${index}`}
                className="flex items-center justify-center px-8 flex-shrink-0"
              >
                <span
                  className={`inline-flex gap-3 font-extrabold text-2xl sm:text-4xl text-white drop-shadow-lg items-center`}
                >
                  {item.icon} {item.text}
                </span>
                <span className="mx-4 text-yellow-200 text-2xl drop-shadow-md">
                  ✦
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
