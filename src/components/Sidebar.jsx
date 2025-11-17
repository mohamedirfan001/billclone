// src/components/Sidebar.jsx
import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/bills">
          <ListItemText primary="Bills" />
        </ListItem>
        <ListItem button component={Link} to="/vendors">
          <ListItemText primary="Vendors" />
        </ListItem>
        <ListItem button component={Link} to="/payments">
          <ListItemText primary="Payments" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
