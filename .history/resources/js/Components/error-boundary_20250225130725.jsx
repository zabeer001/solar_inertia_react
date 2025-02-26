"use client";

import { useState } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="p-4 text-center">
            <h2 className="text-xl font-bold text-red-600">
                Oops, something went wrong
            </h2>
            <p className="text-gray-600">{error.message}</p>
            <button
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                onClick={resetErrorBoundary}
            >
                Try again
            </button>
        </div>
    );
}

export function ErrorBoundary({ children }) {
    return (
        <ReactErrorBoundary FallbackComponent={ErrorFallback}>
            {children}
        </ReactErrorBoundary>
    );
}
