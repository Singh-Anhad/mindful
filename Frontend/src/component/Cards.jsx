import React from 'react';

function Cards({ item }) {
  console.log("Card Item: ", item); // Log the item to check its structure
  
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <h4 className="text-sm font-semibold">{item.description}</h4>
            {item.cost ? ( // Check if price exists
          <p className="text-lg font-bold">Price: {item.cost}</p>
        ) : (
          <p>Price not available</p> // Fallback message if price is not found
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
