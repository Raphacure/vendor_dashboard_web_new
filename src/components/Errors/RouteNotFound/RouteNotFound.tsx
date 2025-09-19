import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const RouteNotFound = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((pre) => pre - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timer === 0) {
    navigate(-1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <div className="max-w-md">
        <h1 className="text-7xl font-extrabold text-[#252b61]">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-800 sm:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block !px-8 !py-3 text-lg font-semibold text-[#252b61] border-1 border-[#252b61] rounded-3xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Go to Homepage
          </Link>
          <p className="mt-2">going back in {timer} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default RouteNotFound;
