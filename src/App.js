import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Posts from "./pages/Posts";

function App() {
   
    return (
       <BrowserRouter>
     <Navigation/>
       <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/post" element={<Posts/>}/>
            <Route  path="/post/:id" element={<PostDetails/>}/>
            <Route  path="/details" element={<Details/>}/>  
       </Routes>
       </BrowserRouter>
    );
}

export default App;
