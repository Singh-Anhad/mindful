import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards"; 
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  const [filterdata, setFilterdata] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('https://mindful-backend-lixt.onrender.com');
        // Filter the data based on category
        const filteredData = res.data.filter((item) => item.category === "Free");
        setBook(filteredData); // Store filtered data
        setFilterdata(filteredData); // Also set filterdata if needed
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
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
        <p className="text-sm sm:text-md md:text-lg font-arial leading-tight">
        From the foundational principles of music theory to the intricate art of production, each course invites you to express your individuality and ignite your creativity. <span className="font-semibold">Mindful Melodies</span> is here to be your ultimate music companion. Whether you're a casual listener, a budding artist, or a seasoned music aficionado, we've got something special for everyone.
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
