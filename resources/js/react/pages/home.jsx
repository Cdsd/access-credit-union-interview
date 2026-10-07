import { useState } from 'react';
import { Autocomplete, CircularProgress, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
export default function HomePage() {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const {
        data: members = [],
        isPending,
        isError,
    } = useQuery({
        queryKey: ['members'],
        queryFn: api.getMembers,
    });

    const filteredMembers = members.filter((member) =>
        member.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (isPending) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 8 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (isError) {
        return (
            <Typography color="error" sx={{ pt: 4 }}>
                Failed to load members.
            </Typography>
        );
    }

    return (
        <Box sx={{ p: 3, width: '100%', display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            <Autocomplete
                options={filteredMembers}
                inputValue={search}
                onInputChange={(_, value) => setSearch(value)}
                getOptionLabel={(member) => member.name}
                noOptionsText="Member not found"
                onChange={(_, member) => {
                    if (member) {
                        navigate(`/members/${member.id}`);
                    }
                }}
                sx={{ width: '100%', maxWidth: 400 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Select Member"
                        placeholder="Search member"
                        autoFocus
                    />
                )}
            />
            <Stack
                direction="row"
                spacing={2}
                sx={{padding: "20px", alignItems: 'center', width: '100%', justifyContent: 'center'}}
            >
                <Button
                    variant="contained"
                    onClick={() => navigate('/members')}
                    sx={{ flex: 1, maxWidth: 150 }}
                >
                    Members
                </Button>

                <Button
                    variant="contained"
                    onClick={() => navigate('/tasks')}
                    sx={{ flex: 1, maxWidth: 150 }}
                >
                    Tasks
                </Button>
            </Stack>
        </Box>
    );
}
