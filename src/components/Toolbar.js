/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { css } from 'theme-ui';

// todo: figure out the best package for React material icons
import BoldIcon from '@material-ui/icons/FormatBold';
import ItalicIcon from '@material-ui/icons/FormatItalic';
import LinkIcon from '@material-ui/icons/InsertLink';
import ImageIcon from '@material-ui/icons/InsertPhoto';
import QuoteIcon from '@material-ui/icons/FormatQuote';
import CodeIcon from '@material-ui/icons/Code';
// import VideoIcon from '@material-ui/icons/Slideshow';
import ListIcon from '@material-ui/icons/FormatListBulleted';
import NumberedListIcon from '@material-ui/icons/FormatListNumbered';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
// import { Dropdown } from './ui';

// "icons"
const B = props => (
  <b
    {...props}
    css={{
      borderRadius: 2,
      paddingLeft: 2,
      paddingRight: 2,
    }}
  />
);
const H1 = () => <B>H1</B>;
const H2 = () => <B>H2</B>;
// const JSX = () => <B>JSX</B>;
// const Gist = () => <B>GIST</B>;

const Context = React.createContext(null);

const Separator = () => (
  <div
    css={css({
      bg: 'gray',
      height: 24,
      mx: 2,
      width: '1px',
    })}
  />
);
const Spacer = () => <div css={{ margin: 'auto' }} />;

const Root = props => (
  <div
    {...props}
    css={css({
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderBottom: '1px solid',
      borderColor: 'gray',
      display: 'flex',
      flexWrap: 'wrap',
      paddingBottom: 2,
      paddingTop: 2,
      position: 'sticky',
      top: 0,
      zIndex: 100,
    })}
  />
);

// todo: handle custom jsx block types
const Button = ({
  nodeType,
  // todo: is there a way to detect this?
  mark,
  insert,
  command,
  ...props
}) => {
  const { editor } = React.useContext(Context);
  const active = editor.isActive(nodeType);
  return (
    <button
      {...props}
      type="button"
      onClick={e => {
        if (command) {
          // editor[command](e)
          console.log({ command, e, nodeType });
        } else if (insert) {
          editor.insertBlock(nodeType).select();
          console.log('insert', { nodeType });
        } else if (mark) {
          editor.toggleMark(nodeType).select();
          console.log('mark', { nodeType });
        } else {
          const isActive = editor.value.blocks.some(
            block => block.type === nodeType
          );
          editor.setBlocks(isActive ? 'paragraph' : nodeType).select();

          console.log('all else', { nodeType });
        }
      }}
      css={css({
        backgroundColor: active ? 'lightgray' : 'transparent',
        border: 0,
        color: active ? 'primary' : 'inherit',
        display: 'block',
        fontSize: 16,
        height: 32,
        lineHeight: 1.5,
        margin: '1px',
        minWidth: 32,
        padding: 1,
        // eslint-disable-next-line sort-keys
        '&:focus': {
          color: 'primary',
          outline: '2px solid',
        },
      })}
    />
  );
};

const defaultChildren = (
  <>
    <Button mark title="Toggle Bold" nodeType="bold">
      <BoldIcon />
    </Button>
    <Button mark title="Toggle Italic" nodeType="italic">
      <ItalicIcon />
    </Button>
    <Button title="Heading 1 (⌘ ⌥ 1)" nodeType="heading-one">
      <H1 />
    </Button>
    <Button title="Heading 2 (⌘ ⌥ 2)" nodeType="heading-two">
      <H2 />
    </Button>
    <Button title="Block Quote (⌃ ⌥ Q)" nodeType="block-quote">
      <QuoteIcon />
    </Button>
    <Button title="Code Block" nodeType="pre">
      <CodeIcon />
    </Button>
    <Button title="Divider" insert nodeType="hr">
      <HorizontalSplitIcon />
    </Button>
    <Separator />
    <Button title="Link (⌘ K)" nodeType="link" command="toggleLink">
      <LinkIcon />
    </Button>
    <Button title="Image" insert nodeType="image">
      <ImageIcon />
    </Button>
    <Separator />
    <Button title="Bulleted List" nodeType="bulleted-list">
      <ListIcon />
    </Button>
    <Button title="Numbered List" nodeType="numbered-list">
      <NumberedListIcon />
    </Button>
    {/* <Button title="JSX" nodeType="jsx" insert>
      <JSX />
    </Button> */}
  </>
);

// const getBlockComponentNames = components =>
//   Object.keys(components).filter(
//     key => typeof components[key].propertyControls === 'object'
//   );

const Toolbar = props => {
  // const { editor, children, components } = props;
  const { editor, children } = props;

  // const blocks = getBlockComponentNames(components);

  return (
    <Context.Provider value={{ editor }}>
      <Root>
        {children}
        <Spacer />
        {/* <Separator /> */}
        {/* <Dropdown
          label="Insert Block"
          onSelect={item => {
            editor.insertJSXBlock(item, {}, components[item]);
          }}
          options={blocks}
        /> */}
      </Root>
    </Context.Provider>
  );
};

Toolbar.defaultProps = {
  children: defaultChildren,
};

Toolbar.Button = Button;
Toolbar.Separator = Separator;

export default Toolbar;
