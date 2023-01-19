import { differenceInSeconds } from 'date-fns'
import { createContext, ReactNode, useContext, useEffect } from 'react'

import { CyclesContext } from './CyclesContext'

interface CountdownContextType {
  minutes: string
  seconds: string
}

interface CountdownContextProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextType)

export function CountdownContextProvider({
  children,
}: CountdownContextProviderProps) {
  const {
    activeCycle,
    activeCycleId,
    totalSecondsPassed,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - totalSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startedAt),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
        }

        setSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes[0]}${minutes[1]}:${seconds[0]}${seconds[1]}`
    } else {
      document.title = 'Ignite Timer'
    }
  }, [totalSecondsPassed, minutes, seconds, activeCycle])

  return (
    <CountdownContext.Provider value={{ minutes, seconds }}>
      {children}
    </CountdownContext.Provider>
  )
}
