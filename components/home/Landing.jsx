import styles from '@/styles/Home.module.css';
// import styled from '@emotion/styled';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const LandingWrapper = styled('div')(({ theme }) => ({
    height: '85vh',
    backgroundColor: '#003350',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
}));

const LandingCenter = styled('div')(({ theme }) => ({
    // border: '1px solid red',
    padding: '0 10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: '80%',
    },
    [theme.breakpoints.up('md')]: {
        width: '60%',
    },
}));

export default function Landing() {
    const router = useRouter();
    return (
        <LandingWrapper>
            <LandingCenter>
                <Box
                    sx={{
                        mb: 2,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        fontSize: {
                            xs: '2.8rem',
                            sm: '3rem',
                            md: '3.5rem',
                            lg: '3.9rem',
                        },
                        fontWeight: '700',
                        background:
                            'linear-gradient(to right, #fa6c9f 0%, #ffe140 80%, #ffe140 100%)',
                        '-webkit-background-clip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                    }}
                >
                    A showcase for
                    <br />
                    users albums
                </Box>
                <Typography
                    component="p"
                    sx={{
                        mb: 10,
                        color: 'white',
                        textAlign: 'center',
                        fontSize: {
                            xs: '1rem',
                            sm: '1.1rem',
                        },
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa laudantium eveniet corrupti, molestias aperiam laborum
                    incidunt, cum beatae quasi quibusdam ad animi
                </Typography>
                <Box
                    sx={{
                        // border: '1px solid red',
                        display: 'flex',
                        alignItem: 'center',
                        justifyContent: 'center',
                        columnGap: 6,
                    }}
                >
                    <button className={styles['login-btn']} onClick={() => router.push('/auth/login')}>Sign in</button>
                    <button className={styles['app-btn']} onClick={() => router.push('/auth/private')}>Go to app</button>
                </Box>
            </LandingCenter>
        </LandingWrapper>
    );
}
