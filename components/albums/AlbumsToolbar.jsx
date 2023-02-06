import {
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
    Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Download as DownloadIcon } from '@/icons/download';
import { Upload as UploadIcon } from '@/icons/upload';
import AddIcon from '@mui/icons-material/Add';

export default function AlbumsToolbar({search, handleSearchChange}) {
    return (
        <Box sx={{ mb: 2 }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
                Albums
            </Typography>
            <Stack
                sx={{
                    rowGap: '10px',
                    flexDirection: {
                        md: 'row',
                    },
                }}
            >
                <>
                    <TextField
                        placeholder="Search albums"
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
                <Box
                    sx={{
                        ml: {
                            md: 'auto',
                        },
                    }}
                >
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
                        // onClick={() => setCreateModalOpen(true)}
                    >
                        Album
                    </Button>
                </Box>
            </Stack>
        </Box>
    );
}
