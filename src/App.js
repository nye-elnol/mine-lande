import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Landing from './pages/landing/Landing'
import Add from './pages/add/Add'
import Search from './pages/search/Search'
import SearchBar from './pages/searchbar/SearchBar'
import Country from './pages/country/Country'
import Footer from './components/Footer'

import './App.css'

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
            
          <Route path="/add" element={<Add />} />
            
          <Route path="/search" element={<Search />} />

          <Route path="/searchbar" element={<SearchBar />} />
            
          <Route path="/countries/:id" element={<Country />} />
            
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}
