import React from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableHead,
    TableContainer,
    TableCell,
    TableRow,
    IconButton,
    Icon,
    Tooltip,
    CircularProgress,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useRouter} from 'next/router';

export default function UsersTable({ users }) {
    const router = useRouter();
    return (
        <Box sx={{}}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell size="small">S/N</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>No of Albums</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {React.Children.toArray(
                            users.map((user, index) => (
                                <TableRow>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.address?.city}</TableCell>
                                    <TableCell>{user.company?.name}</TableCell>
                                    <TableCell>{user.albums.length}</TableCell>
                                    <TableCell>
                                        <Tooltip title="View Albums">
                                            <IconButton
                                                onClick={() => router.push(`/users/${user.id}/albums`)}
                                            >
                                                <RemoveRedEyeIcon
                                                    color="primary"
                                                    fontSize={'medium'}
                                                />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Update user">
                                            <IconButton>
                                                <EditIcon
                                                    fontSize={'medium'}
                                                    sx={{ color: 'green' }}
                                                />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete user">
                                            <IconButton>
                                                <DeleteIcon
                                                    fontSize={'medium'}
                                                    sx={{ color: 'red' }}
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
