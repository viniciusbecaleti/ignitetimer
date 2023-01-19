import { useFormContext } from 'react-hook-form'

import { FormContainer } from './styles'

export function NewCycleForm() {
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <label htmlFor="minutesAmount">durante</label>
      <input
        type="number"
        id="minutesAmount"
        placeholder="00"
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
