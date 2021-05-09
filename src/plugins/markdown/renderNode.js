import React from 'react';
import { Themed } from 'theme-ui';

export default (props, editor, next) => {
  const { node, attributes, children } = props;

  switch (node.type) {
    case 'block-quote':
      return <Themed.blockquote {...attributes}>{children}</Themed.blockquote>;
    case 'bulleted-list':
      return <Themed.ul {...attributes}>{children}</Themed.ul>;
    case 'numbered-list':
      return <Themed.ol {...attributes}>{children}</Themed.ol>;
    case 'list-item':
      return <Themed.li {...attributes}>{children}</Themed.li>;
    case 'list-item-child':
      return <Themed.p {...attributes}>{children}</Themed.p>;
    case 'heading-one':
      return <Themed.h1 {...attributes}>{children}</Themed.h1>;
    case 'heading-two':
      return <Themed.h2 {...attributes}>{children}</Themed.h2>;
    case 'heading-three':
      return <Themed.h3 {...attributes}>{children}</Themed.h3>;
    case 'heading-four':
      return <Themed.h4 {...attributes}>{children}</Themed.h4>;
    case 'heading-five':
      return <Themed.h5 {...attributes}>{children}</Themed.h5>;
    case 'heading-six':
      return <Themed.h6 {...attributes}>{children}</Themed.h6>;
    case 'list-item':
      return <Themed.li {...attributes}>{children}</Themed.li>;
    case 'paragraph':
      return <Themed.p {...attributes}>{children}</Themed.p>;
    case 'hr':
      return <Themed.hr {...attributes} />;
    default:
      return next();
  }
};
