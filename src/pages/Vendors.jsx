import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
} from "@mui/material";
import api from "../api/Api";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [currentVendor, setCurrentVendor] = useState({ id: null, name: "", email: "" });

  const fetchVendors = async () => {
    setLoading(true);
    try {
      const res = await api.get("/vendors");
      setVendors(res.data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch vendors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const handleOpen = (vendor = { id: null, name: "", email: "" }) => {
    setCurrentVendor(vendor);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentVendor({ id: null, name: "", email: "" });
  };

  const handleSave = async () => {
    try {
      if (currentVendor.id) {
        await api.put(`/vendors/${currentVendor.id}`, currentVendor);
      } else {
        await api.post("/vendors", currentVendor);
      }
      fetchVendors();
      handleClose();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to save vendor");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this vendor?")) return;
    try {
      await api.delete(`/vendors/${id}`);
      fetchVendors();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete vendor");
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Vendors</Typography>
      <Button variant="contained" onClick={() => handleOpen()} sx={{ mb: 2 }}>Add Vendor</Button>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vendors.map((vendor) => (
              <TableRow key={vendor.id}>
                <TableCell>{vendor.name}</TableCell>
                <TableCell>{vendor.email}</TableCell>
                <TableCell>
                  <Button onClick={() => handleOpen(vendor)}>Edit</Button>
                  <Button color="error" onClick={() => handleDelete(vendor.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentVendor.id ? "Edit Vendor" : "Add Vendor"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Name"
            fullWidth
            value={currentVendor.name}
            onChange={(e) => setCurrentVendor({ ...currentVendor, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            value={currentVendor.email}
            onChange={(e) => setCurrentVendor({ ...currentVendor, email: e.target.value })}
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

export default Vendors;
