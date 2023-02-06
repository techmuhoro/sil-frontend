import { Box, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/config';
import PhotosView from '@/components/photos';
import { getSession } from 'next-auth/react';

export default function SingleAlbumPage({ photos }) {
    const router = useRouter();
    return (
        <Box>
            <PhotosView photos={photos} />
        </Box>
    );
}

export async function getServerSideProps({params, req}) {
    // verify if user is authenticated
    const session = await getSession({ req });

    if (!session) { //if no session redirect user to login
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    const { albumId } = params; // get the id of the album from the context
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
