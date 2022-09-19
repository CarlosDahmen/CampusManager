import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div id='navbar'>
      <Link to='/campuses'>Campuses</Link>
      <Link to='/students'>Students</Link>
    </div>
  )
}

export default Navbar;
