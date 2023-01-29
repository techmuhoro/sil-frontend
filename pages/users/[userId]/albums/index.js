import { Box, Typography } from '@mui/material';
import {} from 'react';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/config';
import AlbumsView from '@/components/albums';

export default function AlbumsPage({user}) {
    const router = useRouter();
    console.log(user);
    return (
        <Box>
            <AlbumsView user={user} />
        </Box>
    );
}

export async function getServerSideProps(context) {
    const { userId } = context.params;
    try{
        // get the user
        const userRes = await fetch(BASE_URL + `/users/${userId}`);
        const user  = await userRes.json();

        // the user albums
        const albumsRes = await fetch(BASE_URL + `/users/${userId}/albums`);
        const albums =  await albumsRes.json();

        user.albums = albums;
        console.log(user);

        return {
            props: {
                user: user,
            }
        }
    }catch (e) {
        return {
            props: {
                user: {}
            },
        };

    }
}
