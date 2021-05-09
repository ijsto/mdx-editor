/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Data } from 'slate';

import { Context } from '../../components/context';
import Form from './Form';
import Overlay from './Overlay';

const hasJSXBlock = (editor, type) => {
  if (!editor.hasBlock('jsx-void') && !editor.hasBlock('jsx')) return false;
  return editor.value.blocks.some(
    node => node.data && node.data.get('type') === type
  );
};

const setJSXProps = (editor, dataObject) => {
  const {
    value: { startBlock, document },
  } = editor;
  const data = Data.create(dataObject);

  if (startBlock.data.get('type') !== dataObject.type) {
    const parent = document.getParent(startBlock.key);
    if (parent) {
      editor.setNodeByKey(parent.key, { data, type: 'jsx' });
    }
  } else {
    editor.setBlocks({ data });
  }
};

const insertJSXBlock = (editor, type, props, component) => {
  const { isVoid } = component.propertyControls;

  if (isVoid) {
    editor.insertBlock({
      data: {
        props: Data.create(props),
        type,
      },
      type: 'jsx-void',
    });
  } else {
    editor.wrapBlock({
      data: {
        props: Data.create(props),
        type,
      },
      type: 'jsx',
    });
  }
};

const getProps = node => {
  const map = node.data.get('props');
  if (typeof map.toJS !== 'function') return map;
  return map.toJS();
};

const Wrapper = ({
  editor,
  attributes,
  isSelected,
  componentType,
  Component,
  props,
  children,
  fields = {},
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <Component {...attributes} {...props}>
        {children || null}
      </Component>

      {!isSelected && Component.propertyControls.isVoid && <Overlay />}

      {isSelected && (
        <Form
          fields={fields}
          value={props}
          onSubmit={next => {
            editor.setJSXProps({
              props: next,
              type: componentType,
            });
          }}
        />
      )}
    </div>
  );
};

const Node = ({ type, next, ...props }) => {
  const { components } = useContext(Context);
  const Component = components[type];
  if (!Component) return next();

  return (
    <Wrapper
      {...props}
      Component={Component}
      componentType={type}
      fields={Component.propertyControls}
    />
  );
};

export default () => ({
  commands: {
    insertJSXBlock,
    setJSXProps,
  },
  queries: {
    hasJSXBlock,
  },
  renderNode: (props, editor, next) => {
    const { node } = props;
    const isJSXNode = node.type === 'jsx' || node.type === 'jsx-void';
    if (!isJSXNode) return next();
    const type = node.data.get('type');
    if (!type) return next();

    return (
      <Node
        {...props}
        next={next}
        editor={editor}
        type={type}
        props={getProps(node)}
      />
    );
  },
});
