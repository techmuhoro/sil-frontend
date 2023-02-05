import { Typography } from '@mui/material';
export default function AppLogo() {
    return (
        <Typography
            variant="h5"
            sx={{
                fontWeight: '700',
                display: 'inline-block',
                background:
                    'linear-gradient(to right, #fa6c9f 0%, #ffe140 80%, #ffe140 100%)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
            }}
        >
            Albumo
        </Typography>
    );
}
