import { Box, Button, Typography } from "@mui/material";

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

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
            <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
                {question.question}
            </Typography>
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