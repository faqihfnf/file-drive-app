import React from "react";
import Constant from "../_utils/Constant";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="text-blue-700">Save</span> and <span className="text-cyan-700">Share</span> your files easily
            <strong className="mt-1font-extrabold text-red-700 sm:block"> Just in one place </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">{Constant.desc}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-600 sm:w-auto" href="#">
              Get Started
            </a>

            <a className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-500 shadow hover:text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring active:text-indigo-600 sm:w-auto" href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
