import { Box, Typography, Stack, IconButton } from '@mui/material';
import AppLogo from '@/components/home/Logo';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterWrapper = styled('div')(({ theme }) => ({
    backgroundColor: '#003350',
    color: 'white',
    padding: '10px 10px',
}));

export default function Footer() {
    return (
        <FooterWrapper>
            <Stack
                sx={{
                    mb: 5,
                    alignItems: {
                        sm: 'center',
                        md: 'flex-start',
                    },
                    flexDirection: { md: 'row' },
                    justifyContent: {
                        sm: 'flex-start',
                        md: 'space-between',
                    },
                    padding: {
                        sm: '0',
                        md: '20px 20px',
                        lg: '20px 180px',
                    },
                }}
            >
                <Box
                    sx={{
                        mb: 5,
                        width: {
                            sm: '60%',
                            md: 'auto',
                        },
                    }}
                >
                    <AppLogo />
                    <Box sx={{ mb: 2 }} />
                    <Typography sx={{ mb: 2, fontSize: '0.85rem' }}>
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Quisquam, molestias!
                    </Typography>
                    <Stack direction="row" columnGap={3}>
                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        mb: 3,
                        width: {
                            sm: '60%',
                            md: 'auto',
                        },
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                        Quick links
                    </Typography>

                    <Box component={'ul'} sx={{ listStyle: 'none' }}>
                        <LinkItem>Users</LinkItem>
                        <LinkItem>About us</LinkItem>
                        <LinkItem>Blog</LinkItem>
                    </Box>
                </Box>
                <Box
                    sx={{
                        mb: 3,
                        width: {
                            sm: '60%',
                            md: 'auto',
                        },
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                        Help & support
                    </Typography>

                    <Box component={'ul'} sx={{ listStyle: 'none' }}>
                        <LinkItem>Customer Care</LinkItem>
                        <LinkItem>Address</LinkItem>
                        <LinkItem>Address</LinkItem>
                    </Box>
                </Box>
                <Box
                    sx={{
                        mb: 3,
                        width: {
                            sm: '60%',
                            md: 'auto',
                        },
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 1.5 }}>
                        Contacts
                    </Typography>

                    <Box component={'ul'} sx={{ listStyle: 'none' }}>
                        <LinkItem fontSize="1rem">
                            <LocalPhoneIcon fontSize="1rem" sx={{ mr: 1 }} />
                            <Typography fontSize="1rem" component="span">
                                +254 743301115
                            </Typography>
                        </LinkItem>
                        <LinkItem>
                            <EmailIcon fontSize="1rem" sx={{ mr: 1 }} />
                            <Typography fontSize="1rem" component="span">
                                muhorojames7@gmail.com
                            </Typography>
                        </LinkItem>
                        <LinkItem>
                            <LocationOnIcon fontSize="1rem" sx={{ mr: 1 }} />
                            <Typography fontSize="1rem" component="span">
                                Times tower 4th floor
                            </Typography>
                        </LinkItem>
                    </Box>
                </Box>
            </Stack>
            <Typography
                component="p"
                sx={{ opacity: '0.7', textAlign: 'center' }}
            >
                &copy; Copyright {new Date().getFullYear} . James Muhoro
            </Typography>
        </FooterWrapper>
    );
}

function LinkItem({ children }) {
    return (
        <Box
            component="li"
            sx={{
                '&:hover': {
                    textDecoration: ' underline',
                    display: 'inline-block',
                },
                cursor: 'pointer',
                mb: 0.5,
            }}
        >
            {children}
        </Box>
    );
}
