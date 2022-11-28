import { Link } from 'react-router-dom'
import './TheList.css'

export default function TheList({ countries }) {
  if (countries.length === 0) {
    return <div className="err">Ingen Lande :(</div>
  }

  return (
    <div className="list">
      {countries.map(country => (
        <div key={country.id} className="country-grid">
          <h3>{country.name}</h3>
          <p>{country.area} Kv. Km.</p>
          <div>{country.generalInfo.substring(0, 15)}...etc</div>
          <Link to={`/countries/${country.id}`}>Læs mere</Link>
        </div>
      ))}
    </div>
  )
}
