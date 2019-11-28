import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Icon } from 'src/common/icon/icon';

export function NumberPicker(props: { value: number; onChange: (value: number) => void; step?: number }) {
  const { onChange, step = 1, value } = props;
  const dec = () => onChange(value - step);
  const inc = () => onChange(value + step);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value));

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <Button variant="outline-secondary" onClick={dec}>
          <Icon icon={'plus'} />
        </Button>
      </InputGroup.Prepend>
      <FormControl type="number" value={'' + value} onChange={handleChange} />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={inc}>
          <Icon icon={'minus'} />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
