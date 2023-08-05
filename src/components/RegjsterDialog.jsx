import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

export default function RegisterDialog(props) {
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
      <TextField
        label="Age"
        name="age"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={props.handleChangePassword}
      />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={props.handleRegister}>
          Register
        </Button>
        <Button
          onClick={props.handleCloseRegisrDiag}
          Variant="contained"
          color="error"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
