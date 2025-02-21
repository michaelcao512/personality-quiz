import { Box, Button, Typography, LinearProgress, Container } from "@mui/material";

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

    const [currentQuestion, totalQuestions] = question.questionNum
        .split("/")

    const progress = (currentQuestion / totalQuestions) * 100;

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 2,
            height: "100vh", // Set a fixed height for the container
            position: "relative",
        }}>
            {/* Question Number and Question Text */}
            <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
                {question.questionNum}
            </Typography>

            <Container
                sx={{
                    alignContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                    justifyContent: "center",
                }}>
                image will go here once done
            </Container>

            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
                {question.question}
            </Typography>

            {/* Options */}
            <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
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
                            borderRadius: 2,
                            padding: 1.5,
                            marginBottom: 1.5,
                            fontSize: "0.75rem",
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

            {/* Progress Bar */}
            <Box sx={{
                position: "sticky",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "white",
                paddingTop: 2
            }}>
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
            </Box>
        </Box>
    );
}