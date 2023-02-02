import { Button } from '@mui/material';
import { getSession, signOut } from 'next-auth/react';

export default function PrivatePage() {
    const handleLogout = () =>  signOut();

    return (
        <div>
            <p>This page is private and can only be accessed after login</p>
            <Button variant='contained' onClick={handleLogout}>Logout</Button>
        </div>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req });

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    console.log(session);

    return {
        props: {
            session,
        },
    };
}
