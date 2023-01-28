import { Box, Typography } from '@mui/material';
import {} from 'react';
import { useRouter } from 'next/router';

export default function AlbumsPage() {
    const router = useRouter();
    console.log(router.query);
    return (
        <Box>
            <Typography>Hello from albums</Typography>
        </Box>
    );
}

export async function getServerSideProps(context) {
    const { userId } = context.params;
    return {
        props: {},
    };
}
