import React from "react";
import {createBrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Error from "./pages/Error";
import SocialScreen from "./pages/Social"


import Private from './routers/private'
import { Social } from "./components/Social";

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
    element: <Private> <Social /> </Private>
  },
  {
    path: '*',
    element: <Error />
  }
]
)

export { router };