import React from 'react'

import { NumberPicker } from './picker'

interface Props {
  value: number
  onChange: ( value: number ) => void
  disabled?: boolean
}

export function RepetitionsPicker( { value, onChange, disabled }: Props ) {
  return (
    <NumberPicker
      value={value}
      onChange={onChange}
      disabled={disabled}
      min={0}
      label="Repetitions"
      endAdornment="Reps"
    />
  )
}
