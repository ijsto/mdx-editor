import React from 'react';
import { Themed } from 'theme-ui';

export default (props, editor, next) => {
  const { mark, attributes, children } = props;

  switch (mark.type) {
    case 'bold':
      return <Themed.strong {...attributes}>{children}</Themed.strong>;
    case 'code':
      return <Themed.inlineCode {...attributes}>{children}</Themed.inlineCode>;
    case 'italic':
      return <Themed.em {...attributes}>{children}</Themed.em>;
    case 'underlined':
      return <u {...attributes}>{children}</u>;
    case 'strikethrough':
      return <s {...attributes}>{children}</s>;
    default:
      return next();
  }
};
