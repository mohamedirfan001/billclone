import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Loader from "../components/Loader";
import { getBills, createBill, updateBill, deleteBill } from "../services/billsService";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingBill, setEditingBill] = useState(null);
  const [form, setForm] = useState({ vendorName: "", amount: "", dueDate: "", status: "Pending" });

  const fetchBills = async () => {
    setLoading(true);
    try {
      const res = await getBills();
      setBills(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBills(); }, []);

  const handleOpen = (bill = null) => {
    if (bill) setEditingBill(bill);
    setForm(bill || { vendorName: "", amount: "", dueDate: "", status: "Pending" });
    setOpen(true);
  };

  const handleClose = () => {
    setEditingBill(null);
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      if (editingBill) await updateBill(editingBill.id, form);
      else await createBill(form);
      fetchBills();
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteBill(id);
      fetchBills();
    }
  };

  if (loading) return <Loader />;

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>Bills</Typography>
      <Button variant="contained" onClick={() => handleOpen()}>Create Bill</Button>
      <Paper sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vendor</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((bill) => (
              <TableRow key={bill.id}>
                <TableCell>{bill.vendorName}</TableCell>
                <TableCell>${bill.amount}</TableCell>
                <TableCell>{bill.dueDate}</TableCell>
                <TableCell>{bill.status}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(bill)}>Edit</Button>
                  <Button color="error" onClick={() => handleDelete(bill.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingBill ? "Edit Bill" : "Create Bill"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Vendor Name" value={form.vendorName} onChange={(e) => setForm({ ...form, vendorName: e.target.value })} />
          <TextField label="Amount" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
          <TextField label="Due Date" type="date" InputLabelProps={{ shrink: true }} value={form.dueDate} onChange={(e) => setForm({ ...form, dueDate: e.target.value })} />
          <TextField label="Status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Bills;
