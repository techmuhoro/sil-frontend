import {
    Box,
    Button,
    Modal,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

export default function AddUserModal({ open, handleClose }) {
    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h5"
                        component="h2"
                        sx={{ mb: 2 }}
                    >
                        Add new User
                    </Typography>
                    <Box>
                        <>
                            <Stack direction="row" columnGap={2}>
                                <TextField label="Firstname" sx={{ mb: 2 }} />
                                <TextField label="Lastname" sx={{ mb: 2 }} />
                            </Stack>
                            <TextField label="Email" fullWidth sx={{ mb: 2 }} />
                            <TextField label="Phone" fullWidth sx={{ mb: 2 }} />
                            <TextField label="City" fullWidth sx={{ mb: 2 }} />
                            <TextField
                                label="Company"
                                fullWidth
                                sx={{ mb: 2 }}
                            />
                        </>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" sx={{ width: '30%' }}>
                            Add
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
