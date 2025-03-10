import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary'; // Error handling component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary> {/* Wrap App in ErrorBoundary to catch errors */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
