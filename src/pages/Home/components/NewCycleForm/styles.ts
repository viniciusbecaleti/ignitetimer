import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  font-size: 1.125rem;
  font-weight: bold;

  input {
    width: 100%;
    font-size: inherit;
    font-weight: inherit;
    color: ${({ theme }) => theme['gray-100']};
    padding: 0.75rem 0.5rem;
    border: none;
    border-top: 2px solid transparent;
    border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
    outline: none;
    background: none;
  }

  input[type='text'] {
    max-width: 17rem;
  }

  input[type='number'] {
    max-width: 4ch;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`
