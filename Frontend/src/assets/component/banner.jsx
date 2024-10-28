import React from "react";
import banner from "../../public/Banner.jpg";
import signup from 

function Banner() {
  return (
    <>
      {/* Container className={ max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50*/}
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Welcome to <span className="text-pink-500">Mindful Melodies</span>:
              <br className="hidden md:block" />
              Your One-Stop Solution for Every Music Need
            </h1>
            <p className="text-sm sm:text-md md:text-lg text-gray-700 leading-relaxed">
              Are you a music lover looking for a platform that understands your passion? Look no further! <span className="font-semibold">Mindful Melodies</span> is here to be your ultimate music companion. Whether you're a casual listener, a budding artist, or a seasoned music aficionado, we've got something special for everyone.
            </p>
            <p className="text-sm sm:text-md md:text-lg text-gray-700 leading-relaxed">
              Discover a world of music, learn and grow with our expertly curated courses, tune into live radio, and stay updated with the latest music news. Connect with a vibrant community, enjoy personalized recommendations, and experience high-quality streaming anytime, anywhere.
            </p>
            <p className="text-sm sm:text-md md:text-lg text-gray-700 leading-relaxed">
              Why wait? Join <span className="font-semibold">Mindful Melodies</span> today and start your musical journey with us. Explore, learn, and connect in a space designed to celebrate the universal language of music.
            </p>

            {/* Email Input for Newsletter or Sign-Up */}
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-gray-100 p-3 rounded-md shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow bg-gray-100 focus:outline-none mt-2 sm:mt-0"
                placeholder="Enter your email"
              />
            </div>

            {/* Call to Action Button */}
            <button className="btn mt-6 btn-primary bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={banner}
            className="w-full md:w-[550px] md:h-[460px] rounded-lg shadow-lg"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner; 