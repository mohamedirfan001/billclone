import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import api from "../api/Api";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [newPayment, setNewPayment] = useState({ vendor: "", amount: "", date: "" });

  const fetchPayments = async () => {
    setLoading(true);
    try {
      const res = await api.get("/payments");
      setPayments(res.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch payments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewPayment({ vendor: "", amount: "", date: "" });
  };

  const handleSave = async () => {
    try {
      await api.post("/payments", newPayment);
      fetchPayments();
      handleClose();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create payment");
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Payments</Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 2 }}>Add Payment</Button>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vendor</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.vendor}</TableCell>
                <TableCell>${p.amount}</TableCell>
                <TableCell>{new Date(p.date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Payment</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Vendor"
            fullWidth
            value={newPayment.vendor}
            onChange={(e) => setNewPayment({ ...newPayment, vendor: e.target.value })}
          />
          <TextField
            label="Amount"
            type="number"
            fullWidth
            value={newPayment.amount}
            onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            value={newPayment.date}
            onChange={(e) => setNewPayment({ ...newPayment, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Payments;
