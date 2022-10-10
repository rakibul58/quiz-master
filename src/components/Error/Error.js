import React from "react";

const Error = () => {
  return (
    <div className="flex justify-center mt-48 text-center">
      <div>
        <h1 className="text-orange-600 text-9xl">404</h1>
        <h4 className="text-4xl mt-4">Oops! Page not found</h4>
        <p className="mt-3">
          Sorry, but the page you are looking for is not found. Make sure you
          enter the correct url
        </p>
      </div>
    </div>
  );
};

export default Error;
