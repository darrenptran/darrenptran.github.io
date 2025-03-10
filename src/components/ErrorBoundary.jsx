import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }; // Initial state with no error
  }

  // Lifecycle method to update state when an error is caught
  static getDerivedStateFromError() {
    return { hasError: true }; // Set state to indicate an error occurred
  }

  // Lifecycle method to log errors for debugging purposes
  componentDidCatch(error, errorInfo) {
    console.error("Error caught in error boundary:", error, errorInfo); // Log the error and additional info
  }

  // Render method to conditionally display error message or children
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>; // Display fallback UI if there was an error
    }

    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;
