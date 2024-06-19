import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main/Main';
import './App.css';
import Works from './routes/Works/Works';
import Blog from './routes/Blog/Blog';
import PostRoute from './routes/Blog/PostRoute';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/works" element={<Works />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<PostRoute/>} />
    </Routes>
  );
}

export default App;
