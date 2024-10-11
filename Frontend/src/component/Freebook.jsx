import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards"; // Adjust path if necessary

function Freebook() {
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    // Fetch the JSON from the public folder
    fetch("/list.json")
      .then(response => response.json())
      .then(data => {
        const filteredData = data.filter((item) => item.category === "Free");
        setFilterdata(filteredData);
        console.log("Fetched Data:", filteredData); // Debugging statement
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      <div className="space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          Our Offered Courses
        </h1>
        <p className="text-sm sm:text-md md:text-lg text-gray-700 leading-relaxed">
          Are you a music lover looking for a platform that understands your passion? Look no further! <span className="font-semibold">Mindful Melodies</span> is here to be your ultimate music companion. Whether you're a casual listener, a budding artist, or a seasoned music aficionado, we've got something special for everyone.
        </p>
      </div>

      <div className="mt-8"> {/* Added margin-top to separate from the text above */}
        <Slider {...settings}>
          {filterdata.length > 0 ? (
            filterdata.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          ) : (
            <div className="p-4 text-center">No courses available</div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
