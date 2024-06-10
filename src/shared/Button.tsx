import React, { ButtonHTMLAttributes, FC } from 'react';

interface DynamicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const DynamicButton: FC<DynamicButtonProps> = (props) => {
  const { text, children, ...rest } = props;

  return (
    <button {...rest}>
      {text}
    </button>
  );
};

export default DynamicButton;