import constate from 'constate';
import { INumberPicker, INumberPickerCreate, InputEvent } from './type';

function useNumberDec({ value, setValue, disabled, step, min }: INumberPicker) {
  disabled = disabled || value <= min;
  return {
    disabled,
    setValue: () => disabled || setValue(Math.max(value - step, min))
  };
}

function useNumberInc({ value, setValue, disabled, step, max }: INumberPicker) {
  disabled = disabled || value >= max;
  return {
    disabled,
    setValue: () => disabled || setValue(Math.min(value + step, max))
  };
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
    onChange: (event: InputEvent) => disabled || setValue(Number(event.target.value)),
    inc: useNumberInc({ ...props, setValue }),
    dec: useNumberDec({ ...props, setValue })
  };
}

export const [NumberPickerProvider, useNumberPickerContext] = constate(useNumberPicker);
