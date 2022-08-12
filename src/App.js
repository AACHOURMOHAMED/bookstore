import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Books books={[]} />} />
          <Route path="/catg" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
