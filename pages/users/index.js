import { Box, Typography } from '@mui/material';
import { BASE_URL } from '@/config';
import UsersView from '@/components/users';

export default function UsersPage({greet, users}) {
    // console.log(users);
    return (
        <Box>
            <UsersView users={users} />
        </Box>
    )
}

export async function getServerSideProps() {
    const url = BASE_URL + '/users';

    try {
        const res = await fetch(url);
        const users = await res.json();

        // fetch each users albums
        for(let user of users) {
            const albumsUrl = BASE_URL + '/albums' + `?userId=${user.id}`;
            
            const albumsRes = await fetch(albumsUrl);
            const albums = await albumsRes.json();

            user.albums = albums;
        }

        return {
            props: {
                greet: 'Hello world',
                users: users
            }
        }
    }catch(e) {
        return {
            props: {
                greet: '',
                users: [],
            }
        }
    }
}