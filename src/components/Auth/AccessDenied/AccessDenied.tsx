import React from 'react';
import { AlertTriangle } from 'lucide-react';

const AccessDenied: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-12">
      <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <AlertTriangle className="mx-auto h-16 w-16 sm:h-20 sm:w-20 text-red-500 animate-pulse" strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
          Sorry, you don't have the necessary permissions to view this page.
        </p>
      </div>
    </div>
  );
};

export default AccessDenied;
