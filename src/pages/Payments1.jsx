export default function Payments() {
  return (
    <div className="page-wrapper">
      <h2>Send Payment</h2>

      <div className="payment-form">
        <input type="text" placeholder="Vendor Name" />
        <input type="number" placeholder="Amount" />
        <input type="date" />

        <button className="btn-primary">Send Payment</button>
      </div>
    </div>
  );
}
