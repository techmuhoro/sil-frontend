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

export default function UsersToolbar({ search, handleSearchChange }) {
    return (
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
                        <Button size="medium" startIcon={<UploadIcon />}>
                            Import
                        </Button>
                        <Button size="medium" startIcon={<DownloadIcon />}>
                            Download
                        </Button>
                        <Button
                            startIcon={<AddIcon />}
                            variant="contained"
                            size="medium"
                            // onClick={() => setCreateModalOpen(true)}
                        >
                            User
                        </Button>
                    </Box>
                </Box>
            </>
        </Box>
    );
}
