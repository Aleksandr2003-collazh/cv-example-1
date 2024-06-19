import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main/Main';
import './App.css';
import Works from './routes/Works/Works';
import Blog from './routes/Blog/Blog';
import PostRoute from './routes/Blog/PostRoute';
import { useEffect } from 'react';
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

function App() {
  useEffect(() => {
    neonCursor({
      el: document.getElementById("root"),
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025,
    });
  }, []);
  return (
    <>sdfs</>
    // <Routes>
    //   <Route path="/" element={<Main />} />
    //   <Route path="/works" element={<Works />} />
    //   <Route path="/blog" element={<Blog />} />
    //   <Route path="/blog/:id" element={<PostRoute/>} />
    // </Routes>
  );
}

export default App;
