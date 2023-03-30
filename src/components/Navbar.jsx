const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="navbar-logo">
        <div className="navbar-circle">
          <p>T</p>
        </div>
        <p className="nabar-logo_name">Trafalgar</p>
      </div>
      <div className="navbar-list">
        <p className="navbar-item">Home</p>
        <p className="navbar-item">Find a doctor</p>
        <p className="navbar-item">Apps</p>
        <p className="navbar-item">Testimonials</p>
        <p className="navbar-item">About us</p>
      </div>  
    </div>
  )
}

export default Navbar