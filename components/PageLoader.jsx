import { Box, LinearProgress } from '@mui/material';

export default function PageLoader() {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
            }}
        >
            <LinearProgress />
        </Box>
    );
}
