import React, { useState } from 'react';
import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Slide,
    Button,
    CircularProgress,
} from '@mui/material';

const Transition = React.forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

export default function DeleteUserDialog({ open, handleClose }) {
    const [loading, setLoading] = useState(false);
    const deleUser = async () => {
        setLoading(true);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('added');
            }, 1000);
        });

        const res = await promise;
        setLoading(false);
        handleClose();
    };
    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Delete user</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Please confirm deletion of the selected user
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                    onClick={deleUser}
                    variant="contained"
                    sx={{ background: 'red', '&:hover': { background: 'red' } }}
                    disabled={loading}
                >
                    {loading ? (
                        <CircularProgress color='primary' size={20} />
                    ) : (
                        'Delete'
                    )}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

Transition.displayName = 'TransitionComponent';