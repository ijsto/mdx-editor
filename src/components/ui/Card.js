/** @jsx jsx */
import { jsx } from '@emotion/core';

export default props => (
  <div
    {...props}
    css={{
      backgroundColor: 'white',
      borderRadius: 4,
      boxShadow: '0 0 1px rgba(0, 0, 0, .125), 0 1px 4px rgba(0, 0, 0, .125)',
      marginTop: 4,
      padding: 8,
    }}
  />
);
