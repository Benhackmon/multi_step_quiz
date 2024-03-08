import { BoxProps } from '@mui/material';
import { Row } from '.';

export const FullRow = ({ children, sx, ...props }: BoxProps) =>
    <Row
        sx={{
            width: 1,
            ...sx
        }}
        {...props}
    >
        {children}
    </Row>