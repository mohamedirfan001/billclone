import "../styles/components1.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Bill.com</div>
      <Link to="/dashboard" className="sidebar-item"> Dashboard</Link>
      <Link to="/invoices" className="sidebar-item"> Invoices</Link>
      <Link to="/payments" className="sidebar-item"> Payments</Link>
      <Link to="/vendors" className="sidebar-item"> Vendors</Link>
      <Link to="/" className="sidebar-item"> Logout</Link>
    </aside>
  );
}
