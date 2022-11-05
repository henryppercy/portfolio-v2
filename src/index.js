import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom';
import ErrorPage from './error-page';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
