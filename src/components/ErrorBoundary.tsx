import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-emerald-500 mb-4">Oops!</h1>
        <p className="text-xl text-gray-300 mb-8">
          {error instanceof Error
            ? error.message
            : 'Sorry, an unexpected error has occurred.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
