import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io' 
import { VscSearch } from 'react-icons/vsc'

import './Header.css'

export default function Header() {

  return (
    <div className="header">
      <div>
        <Link to="/">
          <FaPlay />
        </Link>
      </div>

      <div>
        <Link to="/searchbar">
          <VscSearch />
        </Link>
      </div>
        
      <div>
        <Link to="/add">
          <IoMdAdd />
        </Link>
      </div>
        
    </div>
  )
}
