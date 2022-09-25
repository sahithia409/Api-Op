
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./Components/Posts/Posts";
import Post from "./Components/Posts/Post";
import Layout from '../src/Components/Ui/Layout'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="post" element={<Post />} />
        </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;