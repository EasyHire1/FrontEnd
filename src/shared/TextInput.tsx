import React, { useState, ChangeEvent, FC } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextInput: FC<TextInputProps> = ({ type = 'text', name, label, value = '',  onChange, ...rest }) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="input-container full-width">
      <input
        type={type}
        name={name}
        value={internalValue}
        onChange={handleChange}
        id={name}
        className={internalValue ? 'filled' : ''}
        placeholder=" "
        {...rest}
      />
      <label className={internalValue ? 'filled' : ''} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default TextInput;
