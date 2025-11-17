import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import Loader from "../components/Loader";
import { getBills } from "../services/billsService";
import { getPayments } from "../services/paymentsService";
import ChartComponent from "../components/ChartComponent.jsx";

const Dashboard = () => {
  const [bills, setBills] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const billsRes = await getBills();
        const paymentsRes = await getPayments();
        setBills(billsRes.data);
        setPayments(paymentsRes.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;

  const totalBills = bills.reduce((acc, bill) => acc + bill.amount, 0);
  const pendingPayments = bills.filter((b) => b.status === "Pending").length;

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography>Total Bills: ${totalBills.toFixed(2)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography>Pending Payments: {pendingPayments}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography>Recent Activity:</Typography>
            {payments.slice(-5).map((p) => (
              <Typography key={p.id}>{p.vendorName}: ${p.amount}</Typography>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <ChartComponent bills={totalBills} payments={payments.reduce((acc, p) => acc + p.amount, 0)} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
