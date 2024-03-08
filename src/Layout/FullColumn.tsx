import { BoxProps } from '@mui/material';
import { Column } from '.';

export const FullColumn = ({ children, sx, ...props }: BoxProps) =>
    <Column
        sx={{
            height: 1,
            ...sx
        }}
        {...props}
    >
        {children}
    </Column>