"use client";

import quizQuestions from "@/data/quiz-questions.json";
import Question from "@/components/Question";
import {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import {redirect} from "next/navigation";
function Quiz() {

    const [currentQuestionId, setCurrentQuestionId] = useState(1);

    // if the current question id is 0, it means they reached the end of the quiz
    if (currentQuestionId === 0){
        redirect("/result")
    }

    // load the current question data from the quiz questions json file
    const currentQuestionData = quizQuestions.questions.find((question) => question.id === currentQuestionId);
    if (!currentQuestionData) {
        return(
            <Box>
                <Typography variant="h1">No question found</Typography>
                <Button onClick={() => setCurrentQuestionId(1)}>First Question</Button>
            </Box>
        );
    }

    // render the current question
    return (
        <Box>
            <Typography variant="h1">Questions</Typography>
            <Question key={currentQuestionId} question={currentQuestionData} setCurrentQuestionId={setCurrentQuestionId} />
            <Button onClick={() => setCurrentQuestionId(1)}>First Question</Button>
        </Box>
    );
}
export default Quiz;