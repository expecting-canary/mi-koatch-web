import constate from 'constate';
import { INumberPicker, INumberPickerCreate, InputEvent } from './type';
import { useState, useCallback } from 'react';

function useDisabledDec({ value, disabled, min }: INumberPicker) {
  return useState(disabled || value <= min);
}
function useSetValueDec({ value, setValue, disabled, step, min }: INumberPicker) {
  return useCallback(() => disabled || setValue(Math.max(value - step, min)), [value, setValue, disabled, step, min]);
}
function useNumberDec(props: INumberPicker) {
  const [disabled] = useDisabledDec(props);
  return {
    disabled,
    setValue: useSetValueDec({ ...props, disabled })
  };
}

function useDisabledInc({ value, disabled, max }: INumberPicker) {
  return useState(disabled || value >= max);
}
function useSetValueInc({ value, setValue, disabled, step, max }: INumberPicker) {
  return useCallback(() => disabled || setValue(Math.min(value + step, max)), [value, setValue, disabled, step, max]);
}
function useNumberInc(props: INumberPicker) {
  const [disabled] = useDisabledInc(props);
  return {
    disabled,
    setValue: useSetValueInc({ ...props, disabled })
  };
}

function useOnChange({ setValue, disabled }: INumberPicker) {
  return useCallback((event: InputEvent) => disabled || setValue(Number(event.target.value)), [setValue, disabled]);
}
function useNumberPicker({
  value,
  setValue,
  disabled = false,
  step = 1,
  min = -Infinity,
  max = Infinity
}: INumberPickerCreate) {
  const props = { value, disabled, step, min, max };
  return {
    ...props,
    onChange: useOnChange({ ...props, setValue }),
    inc: useNumberInc({ ...props, setValue }),
    dec: useNumberDec({ ...props, setValue })
  };
}

export const [NumberPickerProvider, useNumberPickerContext] = constate(useNumberPicker);
