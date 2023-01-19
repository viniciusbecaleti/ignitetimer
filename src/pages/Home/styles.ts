import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  width: 100%;

  max-width: 39rem;
  margin: 0 auto;
`

export const FormContainer = styled.form`
  width: 100%;
`

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme['gray-100']};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const CountdownStartButton = styled(BaseButton)`
  background: ${({ theme }) => theme.green};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-dark']};
  }
`

export const CountdownInterruptButton = styled(BaseButton)`
  background: ${({ theme }) => theme.red};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['red-dark']};
  }
`
