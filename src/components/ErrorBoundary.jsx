import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can replace this with a logging call (Sentry, LogRocket, etc.)
    // store the info so we can show it in the UI for easier debugging
    this.setState({ errorInfo: info });
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className="p-6 bg-red-50 dark:bg-red-900 text-red-900 dark:text-red-100 rounded">
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="mt-2">
            An unexpected error occurred while rendering this section.
          </p>
          {this.state.error?.message && (
            <div className="mt-2 text-sm font-medium">
              Error: {this.state.error.message}
            </div>
          )}
          {this.state.errorInfo && (
            <details className="mt-3 p-2 bg-white dark:bg-gray-800 rounded text-xs text-gray-700 dark:text-gray-200">
              <summary className="cursor-pointer">Show error details</summary>
              <pre className="whitespace-pre-wrap mt-2">
                {this.state.errorInfo.componentStack || this.state.error?.stack}
              </pre>
            </details>
          )}
          <div className="mt-4 flex gap-2">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try again
            </button>
            <Link to="/" className="px-4 py-2 bg-indigo-600 text-white rounded">
              Go home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
