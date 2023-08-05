import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

export default function LoginDialog(props) {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="Username"
          name="username"
          type="text"
          fullWidth
          margin="normal"
          onChange={props.handleChange}
        />

        <TextField
          autoFocus
          label="password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          onChange={props.handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="success"onClick={props.handleLogin}>
          Login
        </Button>
        <Button onClick={props.handleCloseDialog} Variant="contained" color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
