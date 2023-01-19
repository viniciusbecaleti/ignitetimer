import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  height: 46rem;
  margin: 0 auto;
  padding: 2.5rem;
  border-radius: 8px;
  background: ${({ theme }) => theme['gray-800']};
`
