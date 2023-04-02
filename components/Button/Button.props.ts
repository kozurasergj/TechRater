import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  apperance: 'primary' | 'ghost';
  children: ReactNode;
  arrow?: 'right' | 'down' | 'none';
}
