import React, { FC, HTMLAttributes } from 'react';

interface DynamicTextProps extends HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const DynamicTitle: FC<DynamicTextProps> = (props) => {
  const { text, children, ...rest } = props;

  return (
    <h1 {...rest}>
      {text}
    </h1>
  );
};

export default DynamicTitle;