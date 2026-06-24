import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Layout from "../components/Layout";
import Day3 from "../pages/Day3";
import Day5 from "../pages/Day5";
import Day6 from "../pages/Day6";
import Day7 from "../pages/Day7";
import Day8 from "../pages/Day8";
import Day9 from "../pages/Day9";
import Day10 from "../pages/Day10";


const AppRoutes = () => {
  return (
    <>

      <Routes>
       <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/contact" element={<Contact />} />
        

       
       
       </Route>
       <Route path="/Day3" element={<Day3/>}/>
            <Route path="/Day5" element={<Day5/>}/>
            <Route path="/Day6" element={<Day6/>}/>
            <Route path="/Day7" element={<Day7/>}/>
            <Route path="/Day8" element={<Day8/>}/>
            <Route path="/Day9" element={<Day9/>}/>
            <Route path="/Day10" element={<Day10/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;