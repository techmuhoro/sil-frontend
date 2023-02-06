import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { ContentWrapper } from '@/components/ContentWrapper';
import AlbumsToolbar from '@/components/albums/AlbumsToolbar';
import AlbumsTable from '@/components/albums/AlbumsTable';
import AppNavbar from '@/components/Navbar';

export default function AlbumsView({ user }) {
    const [albumsList, setAlbumsList] = useState(user.albums);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const newList = user.albums.filter(album => {
            if (album.title.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                return true;
            }

            return false;
        });

        setAlbumsList(newList);
    }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSearchChange = e => setSearch(e.target.value);

    return (
        <Box sx={{}}>
            <AppNavbar />
            <ContentWrapper>
                <>
                    <AlbumsToolbar
                        search={search}
                        handleSearchChange={handleSearchChange}
                    />
                    <AlbumsTable albums={albumsList} user={user} />
                </>
            </ContentWrapper>
        </Box>
    );
}
