import { Box, Button, Tooltip, Stack } from '@mui/material';
import AppLogo from './home/Logo';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react';
import Link from 'next/link'

export default function AppNavbar() {

    const handleLogout = () => signOut();

    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                px: 4,
                py: 1.5,
                boxShadow: '0px 0.01rem 10px rgba(0,0,0,0.2)',
                mb: 3,
            }}
        >
            <Link href='/'>
                <AppLogo />
            </Link>
            <Box sx={{ ml: 'auto' }}>
                <Tooltip title="Logout">
                    <Button
                        endIcon={<LogoutIcon />}
                        sx={{ fontSize: '1.1rem' }}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </Tooltip>
            </Box>
        </Stack>
    );
}
