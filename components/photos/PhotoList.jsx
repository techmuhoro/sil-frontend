import React, { useState, useStateI } from 'react';
import { Box, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import EditTitleDialog from './EditTitleDialog';

export default function PhotosList({ photos }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handleDialogClose = () => setDialogOpen(false);
    return (
        <>
            <Box>
                <Typography>Images go here</Typography>
                <Stack
                    sx={{
                        rowGap: '30px',
                        columnGap: '20px',
                        alignItems: {
                            xs: 'center',
                            sm: 'flex-start',
                        },
                        flexDirection: {
                            sm: 'row',
                        },
                        flexWrap: 'wrap',
                    }}
                >
                    {React.Children.toArray(
                        photos.map(photo => (
                            <Box sx={{ width: 300 }}>
                                <Image
                                    src={photo.url}
                                    width={300}
                                    height={300}
                                    alt="Album photos"
                                />
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{ px: 1 }}
                                >
                                    <Typography component="p">
                                        {photo.title}
                                    </Typography>
                                    <Tooltip title="Edit title">
                                        <IconButton
                                            onClick={() => {
                                                setSelectedPhoto(photo);
                                                setDialogOpen(true);
                                            }}
                                        >
                                            <EditIcon sx={{ color: 'green' }} />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </Box>
                        ))
                    )}
                </Stack>
            </Box>
            <EditTitleDialog
                open={dialogOpen}
                handleClose={handleDialogClose}
                photo={selectedPhoto}
            />
        </>
    );
}
