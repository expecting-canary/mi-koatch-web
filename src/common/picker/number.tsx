import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Icon } from 'src/common/icon/icon';

type Props = {
  value: number;
  onChange: (value: number) => void;
  step?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
};

export function NumberPicker(props: Props) {
  const { onChange, disabled, value } = props;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    disabled || onChange(Number(event.target.value));
  return (
    <InputGroup>
      <DecButton {...props} />
      <FormControl type="number" value={'' + value} onChange={handleChange} disabled={disabled} />
      <IncButton {...props} />
    </InputGroup>
  );
}

function DecButton({ onChange, step = 1, value, disabled, min }: Props) {
  disabled = disabled || (min !== undefined && value <= min);
  const dec = () =>
    disabled || onChange(min !== undefined ? Math.max(value - step, min) : value - step);
  return (
    <InputGroup.Prepend>
      <Button
        variant={disabled ? 'secondary' : 'outline-secondary'}
        onClick={dec}
        disabled={disabled}
      >
        <Icon icon="minus" />
      </Button>
    </InputGroup.Prepend>
  );
}

function IncButton({ onChange, step = 1, value, disabled, max }: Props) {
  disabled = disabled || (max !== undefined && value >= max);
  const inc = () =>
    disabled || onChange(max !== undefined ? Math.min(value + step, max) : value + step);
  return (
    <InputGroup.Append>
      <Button
        variant={disabled ? 'secondary' : 'outline-secondary'}
        onClick={inc}
        disabled={disabled}
      >
        <Icon icon="plus" />
      </Button>
    </InputGroup.Append>
  );
}
