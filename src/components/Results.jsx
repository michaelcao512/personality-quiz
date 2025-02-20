import { Typography } from "@mui/material";

export default function Results({ results }) {
    return (
        <>
            <Typography variant="h2">You are a...</Typography>
            <Typography variant="h4">E-Score: {results.eScore}</Typography>
            <Typography variant="h4">N-Score: {results.nScore}</Typography>
            <Typography variant="h4">T-Score: {results.tScore}</Typography>
            <Typography variant="h4">P-Score: {results.pScore}</Typography>
        </>
    )
}