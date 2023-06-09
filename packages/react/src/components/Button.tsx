import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',

  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '$3 $4',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$blue400',
          transition: 'all 300ms',
        },

        '&:disabled': {
          backgroundColor: '$blue300',
        },
      },
      secondary: {
        padding: '$2 $4',
        color: '$darkBlue900',
        backgroundColor: '$white',
        border: '2px solid $darkBlue900',
      },
    },
    isFull: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    isFull: false,
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
  variant?: 'primary' | 'secondary';
  isFull?: boolean;
}

Button.displayName = 'Button';
