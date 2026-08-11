import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Navbar from './components/Navbar'
import Speaking from './pages/speaking'
import Podcast from './pages/podcast'
import Blog from './pages/blog'
import Book from './pages/book'
import Courses from './pages/courses'
import Contact from './pages/contact'
import Login from './pages/login'

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/books" element={<Book />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App