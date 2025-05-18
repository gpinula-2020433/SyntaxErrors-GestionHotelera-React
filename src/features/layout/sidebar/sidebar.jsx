import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="bg-secondary text-light p-3 d-flex flex-column" style={{ width: '220px', minHeight: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
      <div className="d-flex flex-column justify-content-center flex-grow-1" style={{ position: 'relative', top: '-40px' }}>
        <ul className="list-unstyled mt-3">
          <li><Link to="/admin/hotel" className="py-2 px-3 rounded d-block hover-sidebar">Hotel</Link></li>
          <li><Link to="/admin/room" className="py-2 px-3 rounded d-block hover-sidebar">Room</Link></li>
          <li><Link to="/admin/services" className="py-2 px-3 rounded d-block hover-sidebar">Services</Link></li>
          <li><Link to="/admin/event" className="py-2 px-3 rounded d-block hover-sidebar">Events</Link></li>
          <li><Link to="/admin/report" className="py-2 px-3 rounded d-block hover-sidebar">Reports</Link></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
