"use client";

import { useState } from "react";
import { Box  } from "@mui/material";
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

    // Find the current question data from the quiz questions JSON
    const currentQuestionData = quizQuestions.questions.find(
        (question) => question.id === currentQuestionId
    );


    // Log current question data and results for debugging
    console.log("currentQuestionData", currentQuestionData);
    console.log("results", results);

    // Render the current question or results based on the currentQuestionId
    return (
        <Box>
            {!currentQuestionData ? (
                <Results results={results} />
            ) : (
                <Question
                    key={currentQuestionId}
                    question={currentQuestionData}
                    setCurrentQuestionId={setCurrentQuestionId}
                    setResults={setResults}
                />
            )}
        </Box>
    );
}