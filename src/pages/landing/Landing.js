import { useData } from '../../hooks/useData'
import TheList from '../../components/TheList'

import './Landing.css'

export default function Landing() {
  const { data, loads, err } = useData('http://localhost:3000/countries')

  return (
    <div className="landing">
      {err && <p className="err">{err}</p>}
      {loads && <p className="loading">Indlæser...</p>}
      {data && <TheList countries={data} />}
    </div>
  )
}
