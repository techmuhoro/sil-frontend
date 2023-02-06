import { Box } from '@mui/material';
import { ContentWrapper } from '@/components/ContentWrapper';
import PhotosToolbar from '@/components/photos/PhotosToolbar';
import PhotosList from '@/components/photos/PhotoList';
import AppNavbar from '@/components/Navbar';

export default function PhotosView({ photos }) {
    return (
        <Box>
            <AppNavbar />
            <ContentWrapper>
                <PhotosToolbar />
                <PhotosList photos={photos} />
            </ContentWrapper>
        </Box>
    );
}
