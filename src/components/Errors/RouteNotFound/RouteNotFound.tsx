import { Link } from "react-router";

const RouteNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <div className="max-w-md">
        <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
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
            className="inline-block !px-8 !py-3 text-lg font-semibold text-white bg-[#252b61] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:scale-105"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RouteNotFound;
