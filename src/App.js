import React from "react";

import { useSelector } from "react-redux";
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import { selectSignedIn } from "./features/userSlice"
import "./styling/home.css";
import "./styling/app.css";
import "./styling/navbar.css";
import "./styling/blog.css";
import Blogs from "./components/Blog";



const App = () => {
   
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
   <Navbar />
    <Homepage />
    {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;