import {Box, Button} from "@mui/material";
import Link from "next/link";
import {Results} from "@/components/Results";

export default function ResultPage(){
    return (
        <Box>
            <Results/>

            <Link href="/">
                <Button variant="contained">
                    Home
                </Button>
            </Link>
        </Box>

    )
}