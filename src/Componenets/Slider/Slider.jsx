import React, { useState, useRef, useEffect } from "react";
import Button from "../Button";
import SliderCard from "./SliderCard";

function Slider() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);

    console.log(isDragging, startX, scrollLeft, sliderRef)
    // Disable text selection while dragging
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Re-enable text selection
    document.body.style.userSelect = "auto";
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      // Re-enable text selection when mouse leaves
      document.body.style.userSelect = "auto";
    }
  };

  // Ensure slider starts at the very beginning (no horizontal offset)
  useEffect(() => {
    sliderRef.current.scrollLeft = 0;
  }, []);

  return (
    <>
      <div className="mt-3 w-full h-auto flex items-center justify-between py-5 px-6">
        <div className="w-auto">
          <h1 className="text-3xl font-semibold">Reviews</h1>
          <p>What people say about Golobe facilities</p>
        </div>

        <div className="w-auto">
          <Button
            buttonText="See All"
            bg={true}
            rotate={false}
            icon={""}
            textColor="text-black"
            btnIcon={false}
          />
        </div>
      </div>

      <div className="slider w-full h-auto mt-4 flex justify-center py-0 px-3">
        <div
          ref={sliderRef}
          className={`w-[100%] flex overflow-x-hidden overflow-y-hidden space-x-20 scroll-smooth snap-x snap-mandatory mx-auto  p-4 relative 
          ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex-shrink-0 snap-center first:ml-8">
            <SliderCard />
          </div>
          <div className="flex-shrink-0 snap-center">
            <SliderCard />
          </div>
          <div className="flex-shrink-0 snap-center">
            <SliderCard />
          </div>
          <div className="flex-shrink-0 snap-center">
            <SliderCard />
          </div>
          <div className="flex-shrink-0 snap-center">
            <SliderCard />
          </div>
          <div className="flex-shrink-0 snap-center">
            <SliderCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
