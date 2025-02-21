"use client";

import Quiz from "@/components/Quiz";
import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function QuizPage() {
    return (
        <Box
            sx={{
                padding: 4,
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
                // height: "700px",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Quiz />

            {/* <Link href={"/"}>
                <Button
                    variant="contained"
                    color="secondary"
                >
                    Home
                </Button>
            </Link> */}
        </Box>
    )
}