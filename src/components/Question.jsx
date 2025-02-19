import {Box, Button, Typography} from "@mui/material";

function Question( {question, setCurrentQuestionId} ) {
    return (
        <Box>
            <Typography variant="h3">{question.question}</Typography>
            {question.options.map((option) => (
                    <Button key={option.id} onClick={() => setCurrentQuestionId(option.nextQuestion)}>{option.text}</Button>
            ))
            }
        </Box>
    );
}
export default Question;