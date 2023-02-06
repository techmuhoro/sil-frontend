import { Box, Typography } from '@mui/material';
import { BASE_URL } from '@/config';
import UsersView from '@/components/users';
import logger from '@/services/logger';
import { getSession } from 'next-auth/react';

export default function UsersPage({ users }) {
    return (
        <>
            <UsersView users={users} />
        </>
    );
}

export async function getServerSideProps({ req }) {
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

    const url = BASE_URL + '/users';

    try {
        // fetch all users
        const res = await fetch(url);
        const users = await res.json();

        // fetch each user get his/her albums
        for (let user of users) {
            const albumsUrl = BASE_URL + '/albums' + `?userId=${user.id}`;

            const albumsRes = await fetch(albumsUrl);
            const albums = await albumsRes.json();

            user.albums = albums;
        }

        return {
            props: {
                users: users,
            },
        };
    } catch (e) {
        logger.error(`${e.message} \n ${e.stack}`);
        return {
            props: {
                greet: '',
                users: [],
            },
        };
    }
}
