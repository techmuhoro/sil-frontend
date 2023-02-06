import { Box } from '@mui/material';
import { ContentWrapper } from '@/components/ContentWrapper';
import PhotosToolbar from '@/components/photos/PhotosToolbar';
import PhotosList from '@/components/photos/PhotoList';

export default function PhotosView({ photos }) {
    return (
        <Box>
            <ContentWrapper>
                <PhotosToolbar />
                <PhotosList photos={photos} />
            </ContentWrapper>
        </Box>
    );
}
