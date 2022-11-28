import { useData } from '../../hooks/useData'
import { useLocation } from 'react-router-dom'
import TheList from '../../components/TheList'


export default function Search() {
  const qrStr = useLocation().search
  const qrPrm = new URLSearchParams(qrStr)
  const myQuery = qrPrm.get('q')

  const url = 'http://localhost:3000/countries?q=' + myQuery
  const { err, loads, data } = useData(url)

  return (
    <div>
      <h2 className="share">Her Er Resultaterne '{myQuery}'</h2>
      {err && <p className="err">{err}</p>}
      {loads && <p className="loading">Indlæser...</p>}
      {data && <TheList countries={data} />}
    </div>
  )
}