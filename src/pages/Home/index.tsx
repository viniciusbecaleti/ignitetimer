import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Play, HandPalm } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CyclesContext } from '../../contexts/CyclesContext'

import {
  CountdownInterruptButton,
  CountdownStartButton,
  FormContainer,
  HomeContainer,
} from './styles'

import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe um projeto'),
  minutesAmount: zod.number().min(1).max(60),
})

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <FormContainer
        id="NewCycleForm"
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
      </FormContainer>
      <Countdown />

      {!activeCycle ? (
        <CountdownStartButton
          type="submit"
          form="NewCycleForm"
          disabled={isSubmitDisabled}
        >
          <Play size={24} />
          Começar
        </CountdownStartButton>
      ) : (
        <CountdownInterruptButton type="button" onClick={interruptCurrentCycle}>
          <HandPalm size={24} />
          Interromper
        </CountdownInterruptButton>
      )}
    </HomeContainer>
  )
}
