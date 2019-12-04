export type INumberPickerCreate = {
  value: number;
  setValue: (value: number) => void;
  disabled?: boolean;
  step?: number;
  min?: number;
  max?: number;
};

export type INumberPicker = Required<INumberPickerCreate>;

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
