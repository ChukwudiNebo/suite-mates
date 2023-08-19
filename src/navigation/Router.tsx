import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routeNames from './RouteNames'
// import LandingLayout from '../ui/layout/landingLayout/LandingLayout'
import AboutPage from '../ui/pages/about/About'
import LandingPage from '../ui/pages/homepage/LandingPage'

const Router = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: routeNames.home,
      element: <LandingPage/>,
      children: [
        { path: routeNames.about, element: <AboutPage /> },
      ],
    },
    // {
    //   path: routeNames.noWhere,
    //   element: <Errorpage />,
    // },
  ])
  return <RouterProvider router={router} />
}

export default Router
