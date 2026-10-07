import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

import { api } from "../../lib/api";

export default function Members() {
    const {
        data: members = [],
        isPending,
        isError,
    } = useQuery({
        queryKey: ["members"],
        queryFn: api.getMembers,
    });

    if (isPending) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", pt: 8 }}>
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
        <Box>
            <Typography variant="h5" gutterBottom>
                Members
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Branch</TableCell>
                            <TableCell>Created</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {members.map((member) => (
                            <TableRow key={member.id} hover>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.branch}</TableCell>
                                <TableCell>
                                    {new Date(
                                        member.created_at,
                                    ).toLocaleDateString()}
                                </TableCell>
                            </TableRow>
                        ))}
                        {members.length === 0 && (
                            <TableRow>
                                <TableCell
                                    colSpan={4}
                                    align="center"
                                    sx={{ color: "text.secondary", py: 4 }}
                                >
                                    No members yet.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
