import React from 'react';
import Cards from './Cards';
import list from "../../public/list.json"
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            We are delighted to have you here{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium repellendus
            accusamus accusantium sed architecto odio.
          </p>
         
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;