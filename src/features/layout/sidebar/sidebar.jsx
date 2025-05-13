import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="bg-secondary text-light p-3 d-flex flex-column" style={{ width: '220px', minHeight: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
      <div className="d-flex flex-column justify-content-center flex-grow-1" style={{ position: 'relative', top: '-40px' }}>
        <ul className="list-unstyled mt-3">
          <li><Link to="/main/products" className="py-2 px-3 rounded d-block hover-sidebar">Products</Link></li>
          <li><Link to="/main/client" className="py-2 px-3 rounded d-block hover-sidebar">Clients</Link></li>
          <li><Link to="/main/suppliers" className="py-2 px-3 rounded d-block hover-sidebar">Suppliers</Link></li>
          <li><Link to="/main/movement" className="py-2 px-3 rounded d-block hover-sidebar">Movements</Link></li>
          <li><Link to="/main/report" className="py-2 px-3 rounded d-block hover-sidebar">Reports</Link></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
