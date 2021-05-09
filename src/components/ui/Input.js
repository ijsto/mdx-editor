/** @jsx jsx */
import { jsx } from '@emotion/react';
import { css } from 'theme-ui';

export default props => (
  <input
    type="text"
    {...props}
    css={css({
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: 'gray',
      color: 'inherit',
      fontFamily: 'inherit',
      fontSize: 1,
      margin: 0,
      padding: 1,
    })}
  />
);
