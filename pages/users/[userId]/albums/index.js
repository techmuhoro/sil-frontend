import { Box, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/config';
import AlbumsView from '@/components/albums';
import { getSession } from 'next-auth/react';

export default function AlbumsPage({ user }) {
    const router = useRouter();
    return (
        <Box>
            <AlbumsView user={user} />
        </Box>
    );
}

export async function getServerSideProps({ params, req }) {
    // verify if user is authenticated
    const session = await getSession({ req });

    if (!session) {
        //if no session redirect user to login
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    const { userId } = params;

    try {
        // get the user
        const userRes = await fetch(BASE_URL + `/users/${userId}`);
        const user = await userRes.json();

        // the user albums
        const albumsRes = await fetch(BASE_URL + `/users/${userId}/albums`);
        const albums = await albumsRes.json();

        user.albums = albums;

        return {
            props: {
                user: user,
            },
        };
    } catch (e) {
        return {
            props: {
                user: {},
            },
        };
    }
}
