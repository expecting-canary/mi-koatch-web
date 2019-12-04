import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Icon } from 'src/common/icon';
import { NumberPickerProvider, useNumberPickerContext } from './context';
import { INumberPickerCreate } from './type';

export function NumberPicker(props: INumberPickerCreate) {
  return (
    <NumberPickerProvider {...props}>
      <InputGroup>
        <DecButton />
        <NumberInput />
        <IncButton />
      </InputGroup>
    </NumberPickerProvider>
  );
}

function NumberInput() {
  const { onChange, disabled, value } = useNumberPickerContext();
  return <FormControl type="number" value={'' + value} onChange={onChange} disabled={disabled} />;
}

function DecButton() {
  const { disabled, setValue } = useNumberPickerContext().dec;
  const variant = disabled ? 'secondary' : 'outline-secondary';
  return (
    <InputGroup.Prepend>
      <Button variant={variant} onClick={setValue} disabled={disabled}>
        <Icon icon="minus" />
      </Button>
    </InputGroup.Prepend>
  );
}

function IncButton() {
  const { disabled, setValue } = useNumberPickerContext().inc;
  const variant = disabled ? 'secondary' : 'outline-secondary';
  return (
    <InputGroup.Append>
      <Button variant={variant} onClick={setValue} disabled={disabled}>
        <Icon icon="plus" />
      </Button>
    </InputGroup.Append>
  );
}
