import styles from '@/styles/Home.module.css';
import { Box } from '@mui/material';

export default function Scroll() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10}}>
            <p className={styles['scroll']}></p>
        </Box>
    );
}
