import React from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const BillCard = ({ bill, onPay }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div>
            <Typography variant="h6">Bill #{bill.id}</Typography>
            <Typography>Amount: ${bill.amount}</Typography>
            <Typography>Status: {bill.status}</Typography>
          </div>
          {bill.status !== "Paid" && (
            <Button variant="contained" color="primary" onClick={() => onPay(bill.id)}>
              Pay
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BillCard;
