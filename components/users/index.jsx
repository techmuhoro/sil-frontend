import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import UserTable from '@/components/users/UsersTable';
import UsersToolbar from '@/components/users/UsersToolbar';
import { ContentWrapper } from '@/components/ContentWrapper';
import AppNavbar from '@/components/Navbar';

export default function UsersView({ users }) {
    const [usersList, setUsersList] = useState(users);
    const [search, setSearch] = useState('');

    // works to filter table data
    useEffect(() => {
        const newList = users.filter(user => {
            if (user.name.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                return true;
            }

            return false;
        });

        setUsersList(newList);
    }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSearchChange = e => setSearch(e.target.value);

    return (
        <Box>
            <AppNavbar />
            <ContentWrapper>
                <UsersToolbar
                    search={search}
                    handleSearchChange={handleSearchChange}
                />
                <UserTable users={usersList} />
            </ContentWrapper>
        </Box>
    );
}
