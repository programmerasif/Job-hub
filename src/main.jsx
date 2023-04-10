import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobCatagoriCard from './components/JobCatagoriCard/JobCatagoriCard';
import JobDetils from './components/JobDetils/JobDetils';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`jobcirculer.json`)
      },
      {
        path: 'jobDetils/:detilId',
        element: <JobDetils />,
        loader: ({params}) => {
          
          const data = fetch(`jobcirculer.json`);
          
          return data

        }
        // return[,fac]
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs />
      },
      {
        path: 'blog',
        element: <Blog />
        
      },
      {
        path: 'JobCatagoriCard',
        element: <JobCatagoriCard />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
