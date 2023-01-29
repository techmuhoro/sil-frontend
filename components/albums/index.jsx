import { Box, Typography } from '@mui/material';
import { ContentWrapper } from '@/components/ContentWrapper';
import AlbumsToolbar from '@/components/albums/AlbumsToolbar';
import AlbumsTable from '@/components/albums/AlbumsTable';

export default function AlbumsView({ user }) {
    return (
        <Box sx={{}}>
            <ContentWrapper>
                <>
                    <AlbumsToolbar />
                    <AlbumsTable user={user} />
                </>
            </ContentWrapper>
        </Box>
    );
}
