import React from "react";
import {createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Networks from "./pages/Networks";

import Error from "./pages/Error";

import Private from './routers/private'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Private> <Admin /> </Private>
  },
  {
    path: '/social',
    element: <Networks/>
  },
  {
    path: '*',
    element: <Error />
  }
]
)

export { router };