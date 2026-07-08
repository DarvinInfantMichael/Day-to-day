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
import Day11 from "../pages/Day11";
import Day12 from "../pages/Day12"
import Day13 from "../pages/Day13"
import Day14 from "../pages/Day14"
import Day15 from "../pages/Day15"
import Day16 from "../pages/Day16"
import Day17 from "../pages/Day17"
import Day18 from "../pages/Day18"
import Day19 from "../pages/Day19"


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
            <Route path="/Day11" element={<Day11/>}/>
            <Route path="/Day12/*" element={<Day12/>}/>
            <Route path="/Day13" element={<Day13/>}/>
            <Route path="/Day14" element={<Day14/>}/>
            <Route path="/Day15" element={<Day15/>}/>
            <Route path="/Day16" element={<Day16/>}/>
            <Route path="/Day17" element={<Day17/>}/>
            <Route path="/Day18" element={<Day18/>}/>
            <Route path="/Day19" element={<Day19/>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;