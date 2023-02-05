import { Box, Typography, Stack } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import CollectionsIcon from '@mui/icons-material/Collections';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function OffersSection() {
    return (
        <Box sx={{ mb: 10 }}>
            <>
                <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
                    What the application offers
                </Typography>
            </>
            <Box>
                <Stack
                    sx={{
                        alignItems: 'center',
                        rowGap: '20px',
                        // border: '1px solid red',
                        justifyContent: {
                            md: 'space-between',
                        },
                        flexDirection: {
                            md: 'row',
                        },
                        width: {
                            md: '85%',
                            lg: '70%',
                        },
                        margin: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            border: '1px solid #5048E5',
                            width: '250px',
                            height: '200px',
                            padding: '5px',
                            borderRadius: '10px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '50%',
                            }}
                        >
                            <GroupIcon
                                sx={{
                                    fontSize: '4rem',
                                    color: 'primary.main',
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ textAlign: 'center', mb: 1 }}
                            >
                                Users
                            </Typography>
                            <Typography
                                component="p"
                                sx={{
                                    fontSize: '0.8rem',
                                    opacity: '0.9',
                                    textAlign: 'center',
                                }}
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate, at!
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: '#5048E5',
                            width: '250px',
                            height: '200px',
                            color: 'white',
                            padding: '5px',
                            borderRadius: '10px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '50%',
                            }}
                        >
                            <CollectionsIcon sx={{ fontSize: '4rem' }} />
                        </Box>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ textAlign: 'center', mb: 1 }}
                            >
                                Albums
                            </Typography>
                            <Typography
                                component="p"
                                sx={{
                                    fontSize: '0.8rem',
                                    opacity: '0.9',
                                    textAlign: 'center',
                                }}
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate, at!
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #5048E5',
                            width: '250px',
                            height: '200px',
                            padding: '5px',
                            borderRadius: '10px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '50%',
                            }}
                        >
                            <CameraAltIcon
                                sx={{ fontSize: '4rem' }}
                                color="primary"
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ textAlign: 'center', mb: 1 }}
                            >
                                Photos
                            </Typography>
                            <Typography
                                component="p"
                                sx={{
                                    fontSize: '0.8rem',
                                    opacity: '0.9',
                                    textAlign: 'center',
                                }}
                            >
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Cupiditate, at!
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}
