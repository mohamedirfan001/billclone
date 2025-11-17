import Sidebar from "../components/Sidebar1";
import Topbar from "../components/Topbar1";
import Card from "../components/Card1";
import Table from "../components/Table1";

export default function Dashboard() {
  const cards = [
    { title: "Invoices", value: "$24,000" },
    { title: "Payments", value: "$18,500" },
    { title: "Vendors", value: "32" },
    { title: "Pending Approval", value: "5" },
  ];

  const tableColumns = ["Invoice #", "Vendor", "Amount", "Status"];
  const tableData = [
    { "Invoice #": "INV-001", Vendor: "Acme Corp", Amount: "$1200", Status: "Paid" },
    { "Invoice #": "INV-002", Vendor: "Beta LLC", Amount: "$500", Status: "Pending" },
    { "Invoice #": "INV-003", Vendor: "Gamma Inc", Amount: "$980", Status: "Overdue" },
  ];

  return (
    <div>
      <Sidebar />
      <Topbar />
      <div style={{ marginLeft: 260, padding: "30px" }}>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {cards.map((c, idx) => (
            <Card key={idx} title={c.title} value={c.value} />
          ))}
        </div>
        <h3 style={{ marginTop: "40px" }}>Recent Invoices</h3>
        <Table columns={tableColumns} data={tableData} />
      </div>
    </div>
  );
}
