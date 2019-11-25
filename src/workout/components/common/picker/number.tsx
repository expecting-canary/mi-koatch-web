import React from 'react';

export function NumberPicker(props: { value: number; onChange: (value: number) => void; step?: number }) {
  const { onChange, step = 1, value } = props;
  const dec = () => onChange(value - step);
  const inc = () => onChange(value + step);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(Number(event.target.value));
  return (
    <div>
      <button onClick={dec}>-</button>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={inc}>+</button>
    </div>
  );
}
