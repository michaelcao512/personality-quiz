"use client";

import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import quizQuestions from "@/data/quiz-questions.json";
import Question from "@/components/Question";
import Results from "@/components/Results";

export default function Quiz() {
    const [currentQuestionId, setCurrentQuestionId] = useState(1);

    // State to track the quiz results
    const [results, setResults] = useState({
        eScore: 0,
        nScore: 0,
        tScore: 0,
        pScore: 0,
    });

    // If the current question ID is 0, the quiz is complete
    if (currentQuestionId === 0) {
        return <Results results={results} />;
    }

    // Find the current question data from the quiz questions JSON
    const currentQuestionData = quizQuestions.questions.find(
        (question) => question.id === currentQuestionId
    );

    // If no question data is found, show an error message
    if (!currentQuestionData) {
        return (
            <Box>
                <Typography variant="h1">No question found</Typography>
                <Button onClick={() => setCurrentQuestionId(1)}>
                    First Question
                </Button>
            </Box>
        );
    }

    // Log current question data and results for debugging
    console.log("currentQuestionData", currentQuestionData);
    console.log("results", results);

    // Render the current question
    return (
        <Box>
            <Typography variant="h1">Questions</Typography>
            <Question
                key={currentQuestionId}
                question={currentQuestionData}
                setCurrentQuestionId={setCurrentQuestionId}
                setResults={setResults}
            />
        </Box>
    );
}
