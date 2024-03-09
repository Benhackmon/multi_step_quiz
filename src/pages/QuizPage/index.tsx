import { Button, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Column, FullRow } from '../../Layout';
import { quizData } from './quizData';

const QuizPage = () => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(quizData.length).fill(null));
    const currentQuestion = useMemo(() => quizData[currentQuestionIndex], [currentQuestionIndex]);
    const isLastQuestion = useMemo(() => currentQuestionIndex === quizData.length - 1, [currentQuestionIndex]);

    const goToNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const goToPrevQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const submitQuiz = () => {
        const correctAnswers = quizData.reduce((acc, { correctAnswerId }, index) =>
            selectedAnswers[index] === correctAnswerId ? acc + 1 : acc, 0);
        navigate(`/scores?score=${correctAnswers * 20}`);
    };

    const chooseAnswer = (_: React.ChangeEvent<HTMLInputElement>, answerId: string) => {
        const updatedSelectedAnswers = [...selectedAnswers];
        updatedSelectedAnswers[currentQuestionIndex] = Number(answerId);
        setSelectedAnswers(updatedSelectedAnswers);
    };

    return (
        <Column sx={{ gap: 1 }}>
            <Typography variant='h4'>Quiz</Typography>
            <Typography variant='h6'>Question {currentQuestionIndex + 1}</Typography>
            <Typography variant='body1'>{currentQuestion.text}</Typography>
            <RadioGroup value={selectedAnswers[currentQuestionIndex]} onChange={chooseAnswer}>
                {currentQuestion.answers.map(({ id, text }) => (
                    <FormControlLabel key={id} value={id} control={<Radio size='small' />} label={text} />
                ))}
            </RadioGroup>
            <FullRow sx={{ justifyContent: 'space-between' }}>
                <Button variant='contained' onClick={goToPrevQuestion} disabled={!currentQuestionIndex}>
                    Previous
                </Button>
                <Button variant='contained' onClick={isLastQuestion ? submitQuiz : goToNextQuestion} disabled={!selectedAnswers[currentQuestionIndex]}>
                    {isLastQuestion ? 'Submit' : 'Next'}
                </Button>
            </FullRow>
        </Column>
    );
};

export default QuizPage;