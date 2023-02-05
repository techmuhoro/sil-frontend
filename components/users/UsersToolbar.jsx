import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Upload as UploadIcon } from '../../icons/upload';
import AddIcon from '@mui/icons-material/Add';
import AddUserModal from '@/components/users/AddUserModal';

export default function UsersToolbar({ search, handleSearchChange }) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => setModalOpen(false);

    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Users
                </Typography>
                <>
                    <Box sx={{ display: 'flex' }}>
                        <>
                            <TextField
                                placeholder="Search users"
                                id="search-agents"
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                value={search}
                                onChange={handleSearchChange}
                            />
                        </>
                        <Box sx={{ ml: 'auto' }}>
                            {/* <Button size="medium" startIcon={<UploadIcon />}>
                                Import
                            </Button> */}
                            <Button size="medium" startIcon={<DownloadIcon />}>
                                Download
                            </Button>
                            <Button
                                startIcon={<AddIcon />}
                                variant="contained"
                                size="medium"
                                onClick={() => setModalOpen(true)}
                            >
                                User
                            </Button>
                        </Box>
                    </Box>
                </>
            </Box>
            <>
                <AddUserModal open={modalOpen} handleClose={handleModalClose} />
            </>
        </>
    );
}
