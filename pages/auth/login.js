import { Box, Button } from '@mui/material';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function LoginPage() {
    const handleLogin = () => {
        signIn('google', {
            callbackUrl: '/users',
        });
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                }}
            >
                <button onClick={handleLogin} className="google-login">
                    <Image
                        src="/images/google-logo.png"
                        alt="img"
                        width={40}
                        height={40}
                    />
                    <span>Sign in with Google</span>
                </button>
            </Box>
        </>
    );
}
