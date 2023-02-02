import React from 'react';
import { Box, Grid } from '@mui/material';
import AlbumCard from './AlbumCard';

const overlays = [
    'rgba(153, 255, 162, 0.5)',
    'rgba(240, 255, 153, 0.5)',
    // 'rgba(180, 153, 255, 0.5)',
    // 'rgba(153, 255, 255, 0.5)',
    // 'rgba(16, 238, 146, 0.5)',
];
export default function AlbumsTable({ user }) {

    return (
        <Box
            sx={{
                width: '50%',
                // border: '1px solid red',
                margin: 'auto',
            }}
        >
            <Grid spacing={3} container>
                {React.Children.toArray(
                    user.albums?.map((album, index) => (
                        <Grid item>
                            <AlbumCard
                                title={album.title}
                                overlay={
                                    index % 2 == 0 ? overlays[0] : overlays[1]
                                }
                                link={`/users/${user.id}/albums/${album.id}`}
                            />
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
}
