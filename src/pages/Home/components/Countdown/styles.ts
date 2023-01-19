import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  font-size: clamp(16px, 15vw, 10rem);

  > span {
    padding: 0 0.9rem;
    border-radius: 8px;
    background: ${({ theme }) => theme['gray-700']};
  }

  @media (max-width: 768px) {
    gap: 0.5rem;

    > span {
      padding: 0 0.5rem;
    }
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  width: 4rem;

  color: ${({ theme }) => theme.green};

  @media (max-width: 768px) {
    width: 2rem;
  }
`
