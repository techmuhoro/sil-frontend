import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, LinearProgress } from '@mui/material';
import PageLoader from '@/components/PageLoader';

export default function App({ Component, pageProps }) {
    const [loader, setLoader] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = url => {
            console.log(`Loding: ${url}`);
            setLoader(true);
        };

        const handleStop = () => {
            console.log(`Done loading url`);
            setLoader(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);
    return (
        <>
            <ThemeProvider theme={theme}>
                {loader && <PageLoader />}
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
