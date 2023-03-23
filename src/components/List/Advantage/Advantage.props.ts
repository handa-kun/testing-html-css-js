import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';


export interface AdvantageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
}