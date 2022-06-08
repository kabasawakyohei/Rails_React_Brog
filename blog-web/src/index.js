import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './routes/blog';
import Blogs from './routes/blogs';
import CreateBlog from './routes/createBlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}></Route>
        <Route path="create" element={<CreateBlog></CreateBlog>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="blogs/:id" element={<Blog></Blog>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
