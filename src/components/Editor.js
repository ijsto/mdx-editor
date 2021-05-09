import React, { useCallback, useEffect, useState } from 'react';
import { Editor, getEventRange, getEventTransfer } from 'slate-react';
import { ThemeProvider } from 'theme-ui';

import { parseMDX, serializer } from '@mdx-rich/serializer/src';
import schema from '../lib/schema';
import { isUrl, isImageUrl } from '../lib/util';

import { Context } from './context';
import defaultTheme from './theme';
import defaultPlugins from '../plugins';
import defaultBlocks from './blocks';
import Toolbar from './Toolbar';

const initialValue = '# Welcome to Blocks!';

const insertImage = (change, src, target) => {
  if (target) {
    change.select(target);
  }

  change.insertBlock({
    data: { src },
    type: 'image',
  });
};

const insertLink = (change, href, target) => {
  if (target) {
    change.select(target);
  }

  change.insertBlock({
    data: { href },
    type: 'link',
  });
};

const BlockEditor = props => {
  const [state, setState] = useState({
    value: serializer.deserialize(parseMDX(initialValue)),
  });

  const emitChange = useCallback(() => {
    const { value } = state;
    props.onChange({ value });
  }, [props, state]);

  useEffect(() => {
    emitChange();
  }, [emitChange]);

  // think this can be a renderEditor plugin
  const handleChange = ({ value }) => {
    setState({ value });
  };

  const handleKeyDown = (event, change, next) => {
    // shortcuts
    switch (event.key) {
      case '/':
        setState({ commandMenu: true });
        return;
      case 'Escape':
        setState({ emojiMenu: false });
        setState({ menu: false });
        return;
      default:
        return next();
    }
  };

  const handlePaste = (event, editor, next) => {
    const { value } = editor;
    const { document, startBlock } = value;

    const target = getEventRange(event, editor);
    const transfer = getEventTransfer(event);
    const { type, text } = transfer;

    if (type === 'text' || type === 'fragment') {
      if (isImageUrl(text)) {
        return editor.command(insertImage, text, target);
      }

      if (isUrl(text)) {
        return editor.command(insertLink, text, target);
      }

      const parent = document.getParent(startBlock.key);
      // We're inside a table and pasting a fragment, for now lets
      // not allow embedded table pasting.
      if (type === 'fragment' && parent.type === 'table_cell') {
        return editor.insertText(text || '');
      }

      return next();
    }

    return next();
  };

  const { plugins, theme, components } = props;
  const allComponents = {
    ...defaultBlocks,
    ...components,
  };
  const context = {
    components: allComponents,
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <Context.Provider value={context}>
        <Editor
          {...props}
          ref={editor => (editor = editor)}
          components={allComponents}
          theme={theme}
          schema={schema}
          placeholder="Write some MDX..."
          plugins={plugins}
          value={state.value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
        />
      </Context.Provider>
    </div>
  );
};

BlockEditor.defaultProps = {
  components: {},
  plugins: defaultPlugins,
  renderEditor: (props, editor, next) => {
    const children = next();
    return (
      <ThemeProvider theme={props.theme}>
        <Toolbar {...props} editor={editor} />
        {children}
      </ThemeProvider>
    );
  },
  theme: defaultTheme,
};

export default BlockEditor;
