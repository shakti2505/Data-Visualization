import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Dashboard</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/" style={({isActive})=>{return{backgroundColor: isActive? "grey":" "}}}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/catogary/topic/" style={({isActive})=>{return{backgroundColor: isActive? "grey":" "}}}>Filter By Topic</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/catogary/sector/" style={({isActive})=>{return{backgroundColor: isActive? "grey":" "}}}>Filter By Sector</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/catogary/end_year/" style={({isActive})=>{return{backgroundColor: isActive? "grey":" "}}}>Filter By End Year</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/catogary/region/" style={({isActive})=>{return{backgroundColor: isActive? "grey":" "}}}>Filter By Region</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/catogary/country/" style={({isActive})=>{return{backgroundColor: isActive? "grey":" "}}}>Filter By Country</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;