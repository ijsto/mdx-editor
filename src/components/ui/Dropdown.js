/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, Global } from '@emotion/core';
import { css } from 'theme-ui';
import { Menu, MenuButton, MenuList, MenuItem } from '@reach/menu-button';

// css prop doesn't work with reach ui
// styles must be global due to how portals are used
const styles = css({
  ':root': {
    '--reach-menu-button': 1,
  },
  '[data-reach-menu]': {
    display: 'block',
    position: 'absolute',
  },
  // eslint-disable-next-line sort-keys
  '[data-reach-menu-list]': {
    backgroundColor: 'white',
    border: '1px solid lightgray',
    display: 'block',
    outline: 'none',
    position: 'relative',
    whiteSpace: 'nowrap',
    zIndex: 101,
  },
  // eslint-disable-next-line sort-keys
  '[data-reach-menu-item]': {
    color: 'inherit',
    cursor: 'pointer',
    display: 'block',
    fontSize: 1,
    fontWeight: 'bold',
    p: 1,
    textDecoration: 'initial',
    // eslint-disable-next-line sort-keys
    '&[data-selected]': {
      bg: 'primary',
      color: 'white',
      outline: 'none',
    },
  },
});

export const Dropdown = ({ label, options = [], onSelect, ...props }) => (
  <>
    <Global styles={styles} />
    <Menu {...props}>
      <MenuButton
        css={css({
          bg: 'transparent',
          border: 0,
          color: 'inherit',
          fontFamily: 'inherit',
          fontSize: 1,
          fontWeight: 'bold',
          m: 0,
          px: 2,
          py: 2,
          // eslint-disable-next-line sort-keys
          '&:focus': {
            outline: '2px solid',
          },
        })}
      >
        {label} <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>
        {options.map((opt, i) => (
          <MenuItem
            key={i}
            style={styles.item}
            onSelect={() => {
              onSelect(opt);
            }}
          >
            {opt}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  </>
);

export default Dropdown;
