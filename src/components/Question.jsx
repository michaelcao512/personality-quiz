import {Box, Button, Typography} from "@mui/material";

export default function Question( {question, setCurrentQuestionId, setResults} ) {
    const onSelect = (option) => {
        setResults((results) => ({
            ...results,
            eScore: results.eScore + (option.eScore || 0),
            nScore: results.nScore + (option.nScore || 0),
            tScore: results.tScore + (option.tScore || 0),
            pScore: results.pScore + (option.pScore || 0),
        }));
        setCurrentQuestionId(option.nextQuestion);
    }
    return (
        <Box>
            <Typography variant="h3">{question.question}</Typography>
            {question.options.map((option) => (
                    <Button key={option.id}
                            onClick={() => onSelect(option)}
                            variant="contained"
                            color="primary"
                    >
                        {option.text}
                    </Button>
            ))
            }
        </Box>
    );
}