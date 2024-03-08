import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Column } from '../../Layout';

const ScoresPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const score = searchParams.get('score');
    const formattedScore = score ? `${score}/100` : 'N/A';

    return (
        <Column sx={{ gap: 1 }}>
            <Typography variant='h4'>Scores</Typography>
            <Typography variant='h6'>Your score is: {formattedScore}</Typography>
        </Column>
    );
};

export default ScoresPage;