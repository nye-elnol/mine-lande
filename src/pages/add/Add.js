import { useState, useRef, useEffect } from 'react'
import { useData } from '../../hooks/useData'
import { useNavigate } from 'react-router-dom'
import { MdSend } from 'react-icons/md'

import './Add.css'

export default function Add() {  
  const [name, setName] = useState('') 
  const [someCity, setSomeCity] = useState('')
  const [famCities, setFamCities] = useState([])
  const [generalInfo, setGeneralInfo] = useState('')
  const [area, setArea] = useState('')
  const userInput = useRef(null)

  const { post, data } = useData('http://localhost:3000/countries', 'POST')
  const redirect = useNavigate()
  
  const handleSend = (e) => {
    e.preventDefault()
    post({ name, famCities, generalInfo, area})
  }

  const handleNew = (e) => {
    e.preventDefault()
    const city = someCity.trim()

    if (city && !famCities.includes(city)) {
      setFamCities(prevCities => [...prevCities, someCity])
    }
    setSomeCity('')
    userInput.current.focus()
  }

  // Redirect 
  useEffect(() => {
    if (data) {
      redirect('/')
    }
  }, [data, redirect])

  return (
    <div className="add">
      <h2 className="share">Del Med Os Ny Information ;)</h2>
      <form onSubmit={handleSend}>

        <label>
          <span>Land:</span>
          <input 
            type="text" 
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>

        <label>
          <span>Nogle Berømte Byer:</span>
          <div className="some-info">
            <input 
              type="text" 
              onChange={(e) => setSomeCity(e.target.value)}
              value={someCity}
              ref={userInput}
            />
            <button onClick={handleNew} className="btn">tilføj</button>
          </div>
        </label>
        <p>Dine Byer: {famCities.map(ct => <small key={ct}>{ct}, </small>)}</p>

        <label>
          <span>Generel Information:</span>
          <textarea 
            onChange={(e) => setGeneralInfo(e.target.value)}
            value={generalInfo}
            required
          />
        </label>

        <label>
          <span>Lands Areal (Kv. Km):</span>
          <input 
            type="number" 
            onChange={(e) => setArea(e.target.value)}
            value={area}
            required 
          />
        </label>

        <button><MdSend /></button> 
      </form>
    </div>
  )
}
