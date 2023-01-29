import { Box, Button } from '@mui/material';
import styles from '@/styles/AlbumCard.module.css';
import EyeIcon from '@mui/icons-material/RemoveRedEye';

export default function AlbumCard({ title, overlay }) {
    return (
        <div className={styles['card']}>
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
            >
                <EyeIcon />
            </Button>
        </div>
    );
}
