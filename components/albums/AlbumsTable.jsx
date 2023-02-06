import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import AlbumCard from './AlbumCard';
import CollectionsIcon from '@mui/icons-material/Collections';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const overlays = [
    'rgba(153, 255, 162, 0.5)',
    'rgba(240, 255, 153, 0.5)',
    // 'rgba(180, 153, 255, 0.5)',
    // 'rgba(153, 255, 255, 0.5)',
    // 'rgba(16, 238, 146, 0.5)',
];
export default function AlbumsTable({ user, albums }) {
    return (
        <Box>
            <Stack
                sx={{
                    alignItems: {
                        sm: 'center',
                        md: 'flex-start'
                    },
                    rowGap: '20px',
                    columnGap: '10px',
                    flexDirection: {
                        md: 'row',
                    },
                    flexWrap: {
                        md: 'wrap'
                    },
                    justifyContent: {
                        md: 'space-evenly'
                    }
                }}
            >
                {React.Children.toArray(
                    albums?.map((album, index) => (
                        <AlbumCard
                            title={album.title}
                            link={`/users/${user.id}/albums/${album.id}`}
                            number={index + 1}
                        />
                    ))
                )}
                {/* <Box
                    sx={{
                        width: '250px',
                        border: '0.15rem solid #5048E5',
                        p: 2,
                        borderRadius: '10px',
                    }}
                >
                    <Typography variant="h6" sx={{ textAlign: 'center' }}>
                        Album
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
                        Sunt Qui Excepturi Placeat Culpa
                    </Typography>
                    <Box>
                        <Button
                            startIcon={<RemoveRedEyeIcon />}
                            variant="text"
                            fullWidth
                        >
                            View
                        </Button>
                    </Box>
                </Box> */}
            </Stack>
            {/* <Grid spacing={3} container>
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
            </Grid> */}
        </Box>
    );
}
