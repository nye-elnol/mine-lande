import { useParams } from 'react-router-dom'
import { useData } from '../../hooks/useData'

import './Country.css'

export default function Country() {
  const { id } = useParams()
  const url = 'http://localhost:3000/countries/' + id
  const { err, loads, data: country } = useData(url)

  return (
    <div className="country">
      {err && <p className="err">{err}</p>}
      {loads && <p className="loading">Indlæser...</p>}
      {country && (
        <>
          <h2 className="share">{country.name}</h2>
          <p>Landets areal er {country.area} kvadratkilometer</p>
          <p>Blandt de berømte byer i dette land, har vi:</p>
          <ul>
            {country.famCities.map(ct => <li key={ct}>{ct}</li>)}
          </ul>
          <p className="gen-info">{country.generalInfo}</p>
        </>
      )}
    </div>
  )
}