import "./../styles/components.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Bill.com</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/invoices">Invoices</Link></li>
        <li><Link to="/vendors">Vendors</Link></li>
        <li><Link to="/payments">Payments</Link></li>
      </ul>

      <div className="nav-right">
        <Link to="/login"><button className="btn-outline">Login</button></Link>
        <button className="btn-primary">Sign Up</button>
      </div>
    </nav>
  );
}
