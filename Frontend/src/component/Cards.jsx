import React from 'react';

function Cards({ item }) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure>
        <img src={item.image} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
