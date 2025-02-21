"use client";
import { Button, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "95vh",
                // backgroundColor: "#f5f5f5"
                backgroundColor: "#ffffff",
            }}
        >
            {/* Mobile Screen Container */}
            <Box
                sx={{
                    width: "375px",
                    height: "700px",
                    border: "1px solid #ccc",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 3,
                }}
            >
                <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
                    Find out What Kind of Bunny You Are!
                </Typography>
                <Link href="/quiz" passHref>
                    <Button variant="contained" sx={{ width: "100%" }}>
                        To the Quiz
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}