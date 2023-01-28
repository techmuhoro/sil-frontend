import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import UserTable from '@/components/users/UsersTable';
import UsersToolbar from '@/components/users/UsersToolbar';
import { ContentWrapper } from '@/components/ContentWrapper';

export default function UsersView({ users }) {
    return (
        <Box>
            <ContentWrapper>
                <UsersToolbar />
                <UserTable users={users} />
            </ContentWrapper>
        </Box>
    );
}
