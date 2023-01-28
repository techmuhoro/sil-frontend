import { Box, Typography } from '@mui/material';
import {} from 'react';
import {useRouter} from 'next/router';

export default function SingleAlbumPage() {  
    const router = useRouter();
    console.log(router.query);
    return (
        <Box>
            <Typography>Singles</Typography>
        </Box>
    )
}