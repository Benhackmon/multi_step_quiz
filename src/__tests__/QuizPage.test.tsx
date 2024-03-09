import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import QuizPage from '../pages/QuizPage'
import { quizData } from '../pages/QuizPage/quizData';
import { MemoryRouter } from 'react-router-dom';

describe('QuizPage component', () => {
    test('renders quiz page with the first question', () => {
        render(
            <MemoryRouter>
                <QuizPage />
            </MemoryRouter>
        );

        const questionText = screen.getByText('Question 1');
        expect(questionText).toBeInTheDocument();
    });

    test('navigates to the next question when choosing answer and "Next" button is clicked', () => {
        render(
            <MemoryRouter>
                <QuizPage />
            </MemoryRouter>
        );
        const answer = screen.getByText('Paris')
        fireEvent.click(answer);

        const nextButton = screen.getByText('Next');
        fireEvent.click(nextButton);

        const nextQuestionText = screen.getByText('Question 2');
        expect(nextQuestionText).toBeInTheDocument();
    });

    test('check "Next" button is disabled if no answer was chosen', () => {
        render(
            <MemoryRouter>
                <QuizPage />
            </MemoryRouter>
        );
        const nextButton = screen.getByText('Next');
        expect(nextButton).toHaveAttribute('disabled')
    });

    test('navigates to the previous question when "Previous" button is clicked', () => {
        render(
            <MemoryRouter>
                <QuizPage />
            </MemoryRouter>
        );

        const answer = screen.getByText('Paris')
        fireEvent.click(answer);

        const nextButton = screen.getByText('Next');
        fireEvent.click(nextButton);

        const prevButton = screen.getByText('Previous');
        fireEvent.click(prevButton);

        const prevQuestionText = screen.getByText('Question 1');
        expect(prevQuestionText).toBeInTheDocument();
    });

    test('checks "Submit" button exists on the end of the quiz', () => {
        render(
            <MemoryRouter>
                <QuizPage />
            </MemoryRouter>
        );

        for (let i = 0; i < 4; i++) {
            const firstAnswerLabel = screen.getByText(quizData[i].answers[0].text);
            fireEvent.click(firstAnswerLabel)


            const submitButton = screen.getByText('Next');
            fireEvent.click(submitButton);
        }

        const firstAnswerLabel = screen.getByText(quizData[4].answers[0].text);
        fireEvent.click(firstAnswerLabel)

        const submitButton = screen.getByText('Submit');

        expect(submitButton).toBeInTheDocument()
    });

});