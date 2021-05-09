/** @jsx jsx */
import { jsx } from '@emotion/react';
import { css } from 'theme-ui';

export default props => (
  <button
    {...props}
    css={css({
      bg: 'primary',
      border: '1px solid transparent',
      borderRadius: 4,
      color: 'background',
      display: 'inline-block',
      fontFamily: 'inherit',
      fontSize: 1,
      fontWeight: 'bold',
      m: 0,
      px: 2,
      py: 1,
      userSelect: 'none',
    })}
    type="button"
  />
);
