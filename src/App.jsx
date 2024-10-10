import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div className="">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="">
        <Navbar></Navbar>
        <Paste></Paste>
      </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="">
        <Navbar></Navbar>
        <ViewPaste></ViewPaste>
      </div>
    },
  ]
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App