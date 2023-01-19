import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { HistoryContainer, StatusContainer, TableContainer } from './styles'

import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startedAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {!cycle.finishedAt && !cycle.interruptAt && (
                    <StatusContainer varient="yellow">
                      Em andamento
                    </StatusContainer>
                  )}

                  {cycle.interruptAt && (
                    <StatusContainer varient="red">
                      Interrompido
                    </StatusContainer>
                  )}

                  {cycle.finishedAt && (
                    <StatusContainer varient="green">Concluído</StatusContainer>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </HistoryContainer>
  )
}
