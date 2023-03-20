import { ReactNode } from 'react';

export interface HtagProps {
    tag: 'UpperCase' | 'Normal' | 'Italic';
    children: ReactNode;
};