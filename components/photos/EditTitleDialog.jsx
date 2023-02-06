import React, { useEffect, useState } from 'react';
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
    TextField,
    Snackbar,
    Alert,
} from '@mui/material';
import { BASE_URL } from '@/config';

const Transition = React.forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

export default function EditTitleDialog({ open, handleClose, photo }) {
    const [photoTitle, setPhotoTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        setPhotoTitle(photo ? photo.title : '');
    }, [photo]);

    const handleSnackbarClose = () => setSnackbarOpen(false);

    // api request to update photo title
    const updatePhotoTitle = async () => {
        setLoading(true);

        try {
            const updateRes = await fetch(`${BASE_URL}/photos/${photo?.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ title: photoTitle }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            const data = await updateRes.json();

            setLoading(false);
            setSnackbarOpen(true);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Update title</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-slide-description">
                    Please confirm deletion of the selected user
                </DialogContentText> */}

                    <Box sx={{ mt: 2 }}>
                        <TextField
                            label={'Photo title'}
                            value={photoTitle}
                            onChange={e => setPhotoTitle(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        sx={{
                            background: 'green',
                            '&:hover': { background: 'green' },
                            width: '100px',
                        }}
                        onClick={updatePhotoTitle}
                        disabled={loading}
                    >
                        {loading ? (
                            <CircularProgress color="primary" size={20} />
                        ) : (
                            'Update'
                        )}
                    </Button>
                </DialogActions>
            </Dialog>
            <>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={5000}
                    onClose={handleSnackbarClose}
                >
                    <Alert
                        onClose={handleSnackbarClose}
                        severity="success"
                        sx={{ width: '100%' }}
                    >
                        Photo title has been updated successfully
                    </Alert>
                </Snackbar>
            </>
        </>
    );
}

Transition.displayName = 'TransitionComponent';