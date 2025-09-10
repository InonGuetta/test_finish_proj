import { createRoot } from 'react-dom/client'
// import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.tsx'
import AddPost from './components/application-layout/AddPost.tsx';


createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/add-post' element={<AddPost/>} />
    </Routes>
  </BrowserRouter>
)
