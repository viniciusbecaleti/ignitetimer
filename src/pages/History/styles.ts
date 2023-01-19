import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  padding: 3.125rem 0;

  h1 {
    font-size: 1.5rem;
  }
`

export const TableContainer = styled.div`
  margin-top: 2rem;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.875rem;
    text-align: left;
    white-space: nowrap;

    th {
      padding: 1rem 1.5rem;
      background: ${({ theme }) => theme['gray-600']};

      &:first-child {
        width: 24rem;
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }

    td {
      color: ${({ theme }) => theme['gray-200']};
      padding: 1rem 1.5rem;
      border-top: 4px solid ${({ theme }) => theme['gray-800']};
      background: ${({ theme }) => theme['gray-700']};
    }
  }
`

interface StatusContainerProps {
  varient: 'green' | 'yellow' | 'red'
}

export const StatusContainer = styled.span<StatusContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999px;
    background: ${({ theme, varient }) => theme[varient]};
  }
`
