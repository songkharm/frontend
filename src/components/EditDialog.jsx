import React from 'react'
import { Dialog, TextField, Button, DialogTitle, DialogActions, DialogContent } from '@mui/material'

export default function EditUserDialog(props) {
    return (
        <Dialog
            open={props.open}
        >
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <TextField
                    label='Username'
                    name='username'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    onChange={props.handleChange}
                />
                <TextField
                    label='Age'
                    name='age'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    onChange={props.handleChange}
                />
                <TextField
                    label='Email'
                    name='email'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    onChange={props.handleChange}
                />
                <TextField
                    label='Address'
                    name='address'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    onChange={props.handleChange}
                />
                <TextField
                    label='Contact'
                    name='contact'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    onChange={props.handleChange}
                />
            </DialogContent>
            <DialogActions>
            <Button variant='contained' color='primary' onClick={props.handleSave}>Save</Button>
                <Button variant='contained' color='error' onClick={props.handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}