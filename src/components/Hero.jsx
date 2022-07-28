import React from 'react';

export default function Hero() {
  return (
    <section className="w-full h-3/4" id="home">
      <div className="w-full h-full flex flex-col items-center py-4 space-y-96 md:space-y-0 md:items-start md:justify-start md:pt-48 md:w-auto md:ml-20 absolute">
        <input
          className="outline outline-0 p-3 rounded-full shadow-sm transition-all duration-300 focus:focus-within:shadow-sm focus:ring-secondary focus:w-11/12 md:hidden"
          type="search"
          name="Searchbar"
          placeholder="San Francisco"
          id=""
        />

        <div className="hidden h-auto md:flex pb-6 md:w-3/4">
          <p className="md:flex text-4xl font-bold text-black">Encuentra más ubicaciones como esta</p>
        </div>

        <button className="rounded-full bg-white  text-lg text-primary  font-semibold p-4 w-48 transition-all ease-in-out duration-300 hover:bg-primary dark:bg-gray-400 dark:hover:bg-gray-900 dark:text-white dark:hover:text-white hover:text-white transform hover:-translate-y-1 hover:scale-100">
          Explorar
        </button>
      </div>
      <div className="w-full h-full md:h-full md:bg-sanFranciscoDesktop md:bg-cover md:bg-center">
        <img className="md:hidden" src="/img/sanFrancisco.jpg" alt="" />
      </div>
    </section>
  );
}
