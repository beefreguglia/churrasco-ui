import { styled } from '../../styles';
import { Button } from '../Button';
import { Text } from '../Text';

export const DatePickerContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$2 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $gray300',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',

  svg: {
    cursor: 'pointer',
    width: '14px',
    height: '14px',
    padding: '$2',
    borderRadius: '$full',

    '&:hover': {
      backgroundColor: '$gray100',
      transition: 'background 300ms',
    },
  },

  variants: {
    hasError: {
      true: {
        border: '1px solid $red500',
        '&:has(input:focus)': {
          border: '1px solid $red500',
          boxShadow: '0 0 0 1px $red500',
          outline: 0,
        },

        '&:has(input:hover)': {
          border: '1px solid $red500',
        },
      },
    },
    isOpen: {
      true: {
        borderColor: '$green300',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$green300',
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
  },
});

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray800',
  fontWeight: 'regular',
  background: '$white',
  border: 0,
  width: '100%',

  '&::-webkit-inner-spin-button': {
    display: 'none',
    '-webkit-appearance': 'none',
  },
  '&::-webkit-calendar-picker-indicator': {
    display: 'none',
    '-webkit-appearance': 'none',
  },

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray300',
  },
});

export const DatePickerErrorContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '$2',
  marginTop: '$1',
  padding: '0 $2',

  [`${Text}`]: {
    color: '$red500',
  },

  svg: {
    minWidth: '14px',
    minHeight: '14px',
    color: '$red500',
  },
});

export const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '$3 $6 $6',

  [`& ${Button}`]: {
    fontSize: '$xs',
    borderRadius: '$md',
    padding: '$2 $4',
  },
});
