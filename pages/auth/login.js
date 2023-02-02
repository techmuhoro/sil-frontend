import { Box, Button } from '@mui/material';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
    const handleLogin = () => {
        signIn('google', {
            callbackUrl: 'http://localhost:3000/auth/private',
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
                    <img
                        src="/images/google-logo.png"
                        alt="img"
                        className="google-img"
                    />
                    <span>Sign in with Google</span>
                </button>
            </Box>
            {/* <Button variant="contained" onClick={handleLogin}>Sign in with Boogle</Button> */}
        </>
    );
}
