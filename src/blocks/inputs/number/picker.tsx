import {
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
} from '@material-ui/core'
import React, { useCallback } from 'react'

export interface INumberPickerCreate {
  value: number
  onChange: ( value: number ) => void
  label?: string
  endAdornment?: string
  disabled?: boolean
  step?: number
  min?: number
  max?: number
}

function useOnChange( onChange: ( value: number ) => void, disabled: boolean ) {
  return useCallback(
    ( event: React.ChangeEvent<HTMLInputElement> ) =>
      disabled || onChange( Number( event.target.value ) ),
    [ onChange, disabled ],
  )
}

export function NumberPicker( {
  value,
  onChange,
  label,
  endAdornment,
  disabled = false,
  step = 1,
  min = -Infinity,
  max = Infinity,
}: INumberPickerCreate ) {
  const change = useOnChange( onChange, disabled )
  const adornment = endAdornment && (
    <InputAdornment position="end">{endAdornment}</InputAdornment>
  )
  return (
    <React.Fragment>
      {label && <FormHelperText>{label}</FormHelperText>}
      <FormControl fullWidth>
        <Input
          type="number"
          value={'' + value}
          onChange={change}
          disabled={disabled}
          endAdornment={adornment}
          inputProps={{ step, min, max }}
        />
      </FormControl>
    </React.Fragment>
  )
}
