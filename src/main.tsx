import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root.tsx';
import ErrorPage from './error-page.tsx';
import Diet from './routes/diet.tsx';
import BoxGame from './routes/boxgame.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/diet",
    element: <Diet />,
  },
  {
    path: "/boxgame",
    element: <BoxGame />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
