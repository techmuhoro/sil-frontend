import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableHead,
    TableContainer,
    TableCell,
    TableRow,
    IconButton,
    Icon,
    Tooltip,
    CircularProgress,
    Grid,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter } from 'next/router';
import AlbumCard from './AlbumCard';

const overlays = [
    'rgba(153, 255, 162, 0.5)',
    'rgba(240, 255, 153, 0.5)',
    // 'rgba(180, 153, 255, 0.5)',
    // 'rgba(153, 255, 255, 0.5)',
    // 'rgba(16, 238, 146, 0.5)',
];
export default function AlbumsTable({ user }) {
    console.log('User--->', user.albums);

    return (
        <Box
            sx={{
                width: '50%',
                // border: '1px solid red',
                margin: 'auto',
            }}
        >
            <Grid spacing={3} container>
                {user.albums.map((album, index) => (
                    <Grid item>
                        <AlbumCard title={album.title} overlay={index % 2 == 0 ? overlays[0] : overlays[1]} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
