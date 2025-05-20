import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white px-4 shadow fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="navbar-brand text-white fw-semibold fs-5">
          Hotel Inventory
        </div>
        <div className="d-flex gap-4">
          <Link to="/main" className="text-light text-decoration-none">Home</Link>
          
          <Link to="/auth/login" className="text-light text-decoration-none">Log in</Link>
          <Link to="/admin" className="text-light text-decoration-none">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
