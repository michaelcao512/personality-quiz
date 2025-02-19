"use client";
import {Button, Typography} from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Typography variant="h2"> Welcome to the Personality Quiz</Typography>
            <Link href={"quiz"}>
                <Button variant="contained">
                    To the Quiz
                </Button>
            </Link>
        </>
    );
}
