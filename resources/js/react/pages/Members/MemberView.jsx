import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import {
    Box,
    CircularProgress,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { api } from '../../lib/api';

const STATUS_LABELS = {
    todo: 'Todo',
    in_progress: 'In Progress',
    done: 'Done',
};

export default function MemberView() {
    const { id } = useParams();

    const {
        data: member,
        isPending,
        isError,
    } = useQuery({
        queryKey: ['member', id],
        queryFn: () => api.getMember(id),
    });

    const assignmentsByStatus = useMemo(() => {
        if (!member?.assignments) {
            return {};
        }

        return member.assignments.reduce((groups, assignment) => {
            const status = assignment.status;

            if (!groups[status]) {
                groups[status] = [];
            }

            groups[status].push(assignment);

            return groups;
        }, {});
    }, [member]);

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
                Failed to load member.
            </Typography>
        );
    }

    return (
        <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
            <Stack spacing={4}>
                <Paper sx={{ p: 3 }}>
                    <Stack spacing={1}>
                        <Typography variant="h4">
                            {member.name}
                        </Typography>

                        <Typography>
                            <strong>Branch:</strong> {member.branch}
                        </Typography>
                    </Stack>
                </Paper>

                <Typography variant="h5">
                    Tasks
                </Typography>

                {Object.entries(STATUS_LABELS).map(([status, label]) => {
                    const assignments = assignmentsByStatus[status] || [];

                    if (assignments.length === 0) {
                        return null;
                    }

                    return (
                        <Paper key={status} sx={{ p: 2 }}>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                {label}
                            </Typography>

                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Task</TableCell>
                                        <TableCell>Description</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {assignments.map((assignment) => (
                                        <TableRow key={assignment.id}>
                                            <TableCell>
                                                {assignment.task.title}
                                            </TableCell>

                                            <TableCell>
                                                {assignment.task.description}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    );
                })}

                {member.assignments.length === 0 && (
                    <Typography>
                        No tasks assigned to this member.
                    </Typography>
                )}
            </Stack>
        </Box>
    );
}
