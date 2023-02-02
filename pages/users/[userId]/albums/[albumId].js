import { Box, Typography } from '@mui/material';
import {} from 'react';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/config';

export default function SingleAlbumPage({ photos }) {
    const router = useRouter();
    console.log(photos);
    return (
        <Box>
            <Typography>Singles</Typography>
        </Box>
    );
}

export async function getServerSideProps(context) {
    const { albumId } = context.params;
    try {
        const photosRes = await fetch(BASE_URL + `/albums/${albumId}/photos`);
        const photos = await photosRes.json();

        return {
            props: {
                photos: photos,
            },
        };

    } catch (e) {
        console.log(e);
        return {
            props: {
                photos: [],
            },
        };
    }
}
