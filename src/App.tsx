import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage  from './components/HomePage';
import { Blog } from './Pages/Blog';
import { Contact } from './Pages/Contact';
import Detail from './Pages/Detail';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/project/:slug' element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
