import { Box, Button, Typography, LinearProgress } from "@mui/material";

export default function Question({ question, setCurrentQuestionId, setResults }) {
    const onSelect = (option) => {
        setResults((results) => ({
            ...results,
            eScore: results.eScore + (option.eScore || 0),
            nScore: results.nScore + (option.nScore || 0),
            tScore: results.tScore + (option.tScore || 0),
            pScore: results.pScore + (option.pScore || 0),
        }));
        setCurrentQuestionId(option.nextQuestion);
    };


    const [currentQuestion] = question.questionNum
        .split("/")
        .map((num) => parseInt(num));

    const progress = (currentQuestion / 14) * 100;

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
            {/* Progress Bar */}
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: 6, // Slightly small height
                    borderRadius: 3,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                        borderRadius: 3,
                        backgroundColor: "#4caf50",
                    },
                }}
            />

            {/* Question Number and Question Text */}
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
                {question.questionNum}
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
                {question.question}
            </Typography>

            {/* Options */}
            {question.options.map((option) => (
                <Button
                    key={option.id}
                    onClick={() => onSelect(option)}
                    variant="outlined"
                    sx={{
                        width: "100%",
                        color: "black",
                        backgroundColor: "white",
                        border: "1px solid black",
                        borderRadius: 3,
                        "&:hover": {
                            backgroundColor: "#f5f5f5",
                            border: "1px solid black",
                        },
                    }}
                >
                    {option.text}
                </Button>
            ))}
        </Box>
    );
}