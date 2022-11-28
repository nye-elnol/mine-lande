import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './SeekForInfo.css'

export default function SeekForInfo() {
  const [bit, setBit] = useState('')
  const goTo = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    goTo(`/search?q=${bit}`)
  }

  return (
    <div className="seek">
      <div className="container">
        <p>Find din By eller dit Land: </p>
        <form onSubmit={handleSubmit}>
          <label>
            <input 
            type="text" 
            onChange={(e) => setBit(e.target.value)} 
            required 
            />
          </label>
        </form>
      </div>
      
    </div>
  )
}
