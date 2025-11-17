export default function Invoices() {
  return (
    <div className="page-wrapper">
      <h2>Invoices</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Invoice #</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>INV-001</td>
            <td>ABC Supplies</td>
            <td>$450</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>INV-002</td>
            <td>OfficeMart</td>
            <td>$320</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
