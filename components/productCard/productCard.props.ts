import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface productCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}