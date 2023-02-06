import { Box, Button, Typography } from '@mui/material';
import styles from '@/styles/AlbumCard.module.css';
import { useRouter } from 'next/router';
import CollectionsIcon from '@mui/icons-material/Collections';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function AlbumCard({ title, link, number }) {
    const router = useRouter();

    return (
        <Box
            sx={{
                width: '250px',
                border: '0.15rem solid #5048E5',
                p: 2,
                borderRadius: '10px',
            }}
        >
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
                Album #{number}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    my: 2,
                }}
            >
                <CollectionsIcon
                    sx={{
                        fontSize: '4rem',
                        color: 'primary.main',
                    }}
                />
            </Box>
            <Typography
                component="p"
                variant="p"
                sx={{ fontSize: '0.9rem', mb: 2 }}
            >
                {title}
            </Typography>
            <Box>
                <Button
                    startIcon={<RemoveRedEyeIcon />}
                    variant="text"
                    fullWidth
                    onClick={() => router.push(link)}
                >
                    View
                </Button>
            </Box>
        </Box>
    );
}

{
    /* <div className={styles['card']}>
    <img src="/images/selena.jpeg" alt="Album photo" />
    <p className={styles['card-title']}>{title}</p>
    <Button
        variant="contained"
        sx={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            borderRadius: 0,
        }}
        onClick={() => router.push(link)}
    >
        <EyeIcon />
    </Button>
</div> */
}
