/** @jsx jsx */
import { jsx } from '@emotion/react';
import { css } from 'theme-ui';
import Box from '../layout/Box';

export default props => (
  <Box
    as="label"
    {...props}
    css={css({
      display: 'flex',
      flexDirection: 'column',
      fontSize: 0,
      fontWeight: 'bold',
      userSelect: 'none',
    })}
  />
);
