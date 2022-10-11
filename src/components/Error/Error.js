import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from '@heroicons/react/24/solid'
const Error = () => {
  return (
    <div className="flex justify-center mt-48 text-center">
      <div>
        <h1 className="text-orange-600 text-9xl font-bold">404</h1>
        <h4 className="text-4xl mt-4">Oops! Page not found</h4>
        <p className="mt-3">
          Sorry, but the page you are looking for is not found. Make sure you
          enter the correct url
        </p>
        <Link className="font-semibold flex justify-center items-center gap-2 mt-6 bg-orange-200 border border-orange-600 text-orange-600 py-3 px-4 w-fit mx-auto rounded-lg hover:bg-orange-300" to='/'>
        <HomeIcon className="w-6 h-6"/>Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
