export type Answer = {
    id: number;
    text: string;
};

type Question = {
    id: number;
    text: string;
    answers: Answer[];
    correctAnswerId: number;
};

export const quizData: Question[] = [
    {
        id: 1,
        text: 'What is the capital of France?',
        answers: [
            { id: 1, text: 'Berlin' },
            { id: 2, text: 'Madrid' },
            { id: 3, text: 'Paris' },
            { id: 4, text: 'Rome' },
        ],
        correctAnswerId: 3,
    },
    {
        id: 2,
        text: 'Which planet is known as the Red Planet?',
        answers: [
            { id: 5, text: 'Earth' },
            { id: 6, text: 'Mars' },
            { id: 7, text: 'Jupiter' },
            { id: 8, text: 'Saturn' },
        ],
        correctAnswerId: 6,
    },
    {
        id: 3,
        text: 'What is the largest mammal in the world?',
        answers: [
            { id: 9, text: 'Elephant' },
            { id: 10, text: 'Blue Whale' },
            { id: 11, text: 'Giraffe' },
            { id: 12, text: 'Polar Bear' },
        ],
        correctAnswerId: 10,
    },
    {
        id: 4,
        text: 'Who wrote "Romeo and Juliet"?',
        answers: [
            { id: 13, text: 'Charles Dickens' },
            { id: 14, text: 'William Shakespeare' },
            { id: 15, text: 'Jane Austen' },
            { id: 16, text: 'Mark Twain' },
        ],
        correctAnswerId: 14,
    },
    {
        id: 5,
        text: 'What is the capital of Japan?',
        answers: [
            { id: 17, text: 'Beijing' },
            { id: 18, text: 'Seoul' },
            { id: 19, text: 'Tokyo' },
            { id: 20, text: 'Bangkok' },
        ],
        correctAnswerId: 19,
    },
];