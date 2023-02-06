import { Box, Typography } from '@mui/material';
import {} from 'react';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/config';
import PhotosView from '@/components/photos';

export default function SingleAlbumPage({ photos }) {
    const router = useRouter();
    return (
        <Box>
            <PhotosView photos={photos} />
        </Box>
    );
}

export async function getServerSideProps(context) {
    const { albumId } = context.params; // get the id of the album from the context
    try {
        const photosRes = await fetch(BASE_URL + `/albums/${albumId}/photos`);
        const photos = await photosRes.json();

        return {
            props: {
                photos: photos,
            },
        };
    } catch (e) {
        return {
            props: {
                photos: [],
            },
        };
    }
}
