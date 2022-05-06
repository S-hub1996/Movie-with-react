import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.scss";
import Home from "../src/Components/Home/Home";
import Header from "../src/Components/Header/Header";
// import Footer from "../src/Components/Footer/Footer";
import PageNotFound from "../src/Components/PageNotFound/PageNotFound";
import MovieDetail from "../src/Components/MovieDetail/MovieDetail";


function App() {
  return (
    <div className="App">

<div className="app">
      
        
 <Header/>
        <div className="container">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:imdbID" element={<MovieDetail/>} />
            <Route element={<PageNotFound/>} />
        </Routes>
        </BrowserRouter>

        </div>
{/* <Footer /> */}


       
       
    </div>
    </div>
  );
}

export default App;
