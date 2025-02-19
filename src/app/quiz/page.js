import Quiz from "@/components/Quiz";
import Link from "next/link";
import {Button} from "@mui/material";

export default function QuizPage(){
    return (
        <>
            <Quiz/>
            
            <Link href={"/"}>
                <Button variant="contained">
                    Home
                </Button>
            </Link>
        </>
    )
}